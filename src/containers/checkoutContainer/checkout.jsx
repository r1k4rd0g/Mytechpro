import { useState } from "react";
import PropTypes from 'prop-types';
import { db } from "../../firebase/client";
import { useLoading } from '../../customHooks/useLoading';
import { collection, addDoc, query, where, getDocs, serverTimestamp } from 'firebase/firestore';
import { Modal, Form, Input, Button, Result } from 'antd'

export const CheckoutModal = ({ showModal, onCancel, cart, clearCart }) => {
    const [form] = Form.useForm();
    const [loading, startLoading, stopLoading] = useLoading()
    const [order, setOrder] = useState();
    const [isRegistered, setIsRegistered] = useState(false)

    const handleCheckout = async () => {
        try {
            startLoading()
            await form.validateFields();
            const values = form.getFieldsValue(true);
            const userSearch = await checkUser(values.email)
            if (userSearch) {
                setIsRegistered(true);
            } else {
                const userRef = await registerUser(values);
                if (userRef) {
                    const orderRef = await placeOrder(userRef.id, cart);
                    setOrder(orderRef);
                    clearCart();
                } else {
                    Modal.error({
                        title: 'Error',
                        content: 'Error al registrar el usuario, por favor, inténtelo nuevamente'
                    })
                }
            }
        } catch (error) {
            console.error('error al validar el formulario: ', error)
        } finally {
            stopLoading()
        }
    };

    const checkUser = async (email) => {
        try {
            const userRef = collection(db, 'users');
            const userSearch = query(userRef, where('email', '==', email));
            const querySnapshot = await getDocs(userSearch);
            if (!querySnapshot.empty) {
                return querySnapshot.docs[0].id; // Retorna el ID del usuario encontrado
            }
            return null; // Si no se encontró el usuario
        } catch (error) {
            console.error('Error al verificar el usuario:', error);
            throw error;
        }
    }
    const registerUser = async ({ firstName, lastName, email }) => {
        try {
            const refUsers = collection(db, 'users')
            const userRef = await addDoc(refUsers, {
                firstName,
                lastName,
                email,
                createdAt: serverTimestamp(),
            });
            return userRef;
        } catch (error) {
            console.error('Error al registrar el usuario:', error);
            throw error;
        }
    }
    const placeOrder = async (userId, cartItems) => {
        try {
            const ordersRef = collection(db, 'orders');
            const newOrder = await addDoc(ordersRef, {
                userId,
                items: cartItems.map(item => ({
                    productId: item.id,
                    productName: item.name,
                    quantity: item.quantity
                })),
                totalItems: cartItems.reduce((total, item) => total + item.quantity, 0),
                totalPrice: cartItems.reduce((total, item) => total + (item.price * item.quantity), 0),
                createdAt: serverTimestamp(), // Marca de tiempo del servidor
            });
            return newOrder.id;
        } catch (error) {
            console.error('Error al crear la orden de compra:', error);
            throw error;
        }
    }
    return (
        <Modal
            title="Completa tus datos para la compra"
            open={showModal}
            onCancel={onCancel}
            footer={order ? null : [
                <Button key="back" onClick={onCancel}>
                    Cancelar
                </Button>,
                <Button key="submit" type="primary" onClick={handleCheckout} loading={loading}>
                    Confirmar Compra
                </Button>,
            ]}
        >
            {order ? (
                <Result
                    status="success"
                    title={`¡Orden de compra ${order} realizada con éxito!`}
                    subTitle="Gracias por tu compra. Recibirás un correo electrónico con los detalles de tu pedido."
                    extra={[
                        <Button type="primary" onClick={onCancel} key="close">
                            Cerrar
                        </Button>,
                    ]}
                />
            ) : isRegistered ? (
                <Result
                    status="info"
                    title="El email ya está registrado"
                    subTitle="Por favor, inicia sesión para completar tu compra."
                    extra={[
                        <Button type="primary" onClick={onCancel} key="login">
                            Iniciar Sesión
                        </Button>,
                    ]}
                />
            ) : (
                <Form form={form} layout="vertical">
                    <Form.Item
                        name="firstName"
                        label="Nombre"
                        rules={[{ required: true, message: 'Por favor ingresa tu nombre' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="lastName"
                        label="Apellido"
                        rules={[{ required: true, message: 'Por favor ingresa tu apellido' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name="email"
                        label="Email"
                        rules={[
                            { required: true, message: 'Por favor ingresa tu email' },
                            { type: 'email', message: 'Ingresa un email válido' },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            )}
        </Modal>
    );
}

CheckoutModal.propTypes = {
    showModal: PropTypes.bool.isRequired,
    onCancel: PropTypes.func.isRequired,
    cart: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            quantity: PropTypes.number.isRequired,
        })
    ).isRequired,
    clearCart: PropTypes.func.isRequired,
};

CheckoutModal.defaultProps = {
    cart: [],
};