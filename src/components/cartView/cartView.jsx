import { List, Button, Row, Col, Typography } from 'antd'
import { useCart } from '../../customHooks/useCart'
import { CheckoutModal } from '../../containers/checkoutContainer/checkout'
import { useState } from 'react'

const { Title, Text } = Typography

export const CartView = () => {
    const { cart, addQuantity, removeFromCart, clearCart, decreaseFromCart } = useCart();
    const [showCheckoutModal, setShowCheckoutModal] = useState(false);
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0)
    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0)

    const handleCheckout = () => {
        setShowCheckoutModal(true);
    };

    const handleCancel = () => {
        setShowCheckoutModal(false);
    };

    return (
        <div style={{ padding: '20px', width: '100%', backgroundColor: 'gray'}}>
            <Title level={2}>Carrito de Compras</Title>
            <List
                itemLayout="horizontal"
                dataSource={cart}
                renderItem={item => (
                    <List.Item
                        actions={[
                            <Button key={`decrease-${item.id}`} onClick={() => decreaseFromCart(item.id)} disabled={item.quantity === 1}>-</Button>,
                            <Button key={`add-${item.id}`} onClick={() => addQuantity(item.id, 1)} disabled={item.quantity >= item.stock}>+</Button>,
                            <Button key={`remove-${item.id}`} onClick={() => removeFromCart(item.id)}>Sacar Producto</Button>
                        ]}
                    >
                        <List.Item.Meta
                            title={item.name}
                            description={
                                <>
                                    <Text>Cantidad: {item.quantity}</Text><br />
                                    <Text>Precio: {item.price}</Text><br />
                                    <Text>Subtotal: USD {item.price * item.quantity}</Text>
                                </>
                            }
                        ></List.Item.Meta>
                    </List.Item>
                )}
            ></List>
            <Row gutter={16} style={{ marginTop: '20px' }}>
                <Col span={12}>
                    <Title level={4}>Total de productos en el carrito: {totalItems}</Title>
                    <Title level={4}>Total a pagar: USD {totalPrice.toFixed(2)}</Title>
                </Col>
                <Col span={12} style={{ textAlign: 'right' }}>
                    <Button onClick={clearCart}>Vaciar carrito</Button>
                    <Button type="primary" onClick={handleCheckout} style={{ marginLeft: '10px' }}>
                        Pagar
                    </Button>
                </Col>
            </Row>
            <CheckoutModal
                showModal={showCheckoutModal}
                onCancel={handleCancel}
                cart={cart}
                clearCart={clearCart}
            />
        </div>
    )
}