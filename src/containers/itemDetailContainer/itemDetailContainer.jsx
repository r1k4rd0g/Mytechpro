
import { useState, useEffect } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/client';
import { MediumSpin } from '../../components/spinners/spinners'
import { useLoading } from '../../customHooks/useLoading';
import { NotFound } from '../../components/statusPages/statusPages'
import './itemDetailContainer'
import { useParams } from 'react-router-dom';


export const ItemDetail = () => {
    const { idItem } = useParams()
    console.log('id de producto por parámetro desde itemDetailContainer.jsx', idItem)
    const [product, setProduct] = useState({})
    const [loading, startLoading, stopLoading] = useLoading()

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
    if (!product) return <NotFound />


    //console.log('consola products desde itemDetailContainer.jsx', product)



    return (
        <div className="product-detail">
            <h2>{product.name}</h2>
            <div className="product-detail-image">
                <img src={product.img} alt={product.name} />
            </div>
            <p>{product.detail}</p>
            <p>${product.price}</p>
        </div>
    )
};

