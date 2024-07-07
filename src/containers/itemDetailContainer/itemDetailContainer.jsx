
import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/client';
import { MediumSpin } from '../../components/spinners/spinners'
import { NotFound } from '../../components/statusPages/statusPages'
import { useCounter } from '../../customHooks/useCounter';
import { useLoading } from '../../customHooks/useLoading';
import { useCart } from '../../customHooks/useCart';
import { Card } from 'react-bootstrap'
import { Button, InputNumber, Modal, } from 'antd';
//import { Link } from 'react-router-dom'

import { useParams } from 'react-router-dom';
import './itemDetailContainer.css'


export const ItemDetail = () => {
    const { idItem } = useParams()

    const [product, setProduct] = useState({})
    const [loading, startLoading, stopLoading] = useLoading()
    const { quantity, sumar, restar, valueTyped } = useCounter(1, product.stock);
    const [showModal, setShowModal] = useState(false);
    const {addToCart} = useCart();

    useEffect(() => {
        const searchProduct = async () => {
            startLoading();
            try {
                const productRef = doc(db, 'productos', idItem)
                const productSnap = await getDoc(productRef)
                if (productSnap.exists()) {
                    setProduct({ id: productSnap.id, ...productSnap.data() });
                } else {
                    console.log('No existe el producto con el id: ', idItem)
                }
            } catch (error) {
                console.error('No hay producto')
            } finally {
                stopLoading()
            }
        };
        searchProduct();

    }, [idItem])
    if (loading) return <MediumSpin />
    if (!product || !product.name) return <NotFound />

    const handleAddToCart = () =>{
        addToCart(product, quantity);
    }
    return (
        <>
            <Card style={{ width: '18rem', margin: 'auto' }}>
                <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <div className="product-detail-image">
                        <img
                            src={product.img}
                            alt={product.name}
                            style={{ width: '100%', cursor: 'pointer' }}
                            onClick={() => setShowModal(true)}
                        />
                    </div>
                    <Card.Text>{product.detail}</Card.Text>
                    <Card.Text>Precio USD: {product.price}</Card.Text>
                    <div className="d-flex justify-content-center align-items-center mb-2">
                        <Button onClick={restar} disabled={quantity <= 1}>-</Button>
                        <InputNumber
                            min={1}
                            max={product.stock}
                            value={quantity}
                            onChange={(value) => valueTyped(value)}
                            className="mx-2 text-center"
                            style={{ width: '60px' }}
                        />
                        <Button onClick={sumar} disabled={quantity >= product.stock}>+</Button>
                    </div>
                    <Button onClick={handleAddToCart} type="primary">Add to Cart</Button>
                </Card.Body>
            </Card>

            <Modal
                title={product.name}
                open={showModal}
                onCancel={() => setShowModal(false)}
                footer={[
                    <Button key="close" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                ]}
                centered
            >
                <div className="modal-image-container">
                    <img
                        src={product.img}
                        alt={product.name}
                    />
                </div>
            </Modal>
        </>
    );

    /*return (
        <div className="product-detail">
            <h2>{product.name}</h2>
            <div className="product-detail-image">
                <img src={product.img} alt={product.name} />
            </div>
            <p>{product.detail}</p>
            <p>${product.price}</p>
        </div>
    )*/
};

