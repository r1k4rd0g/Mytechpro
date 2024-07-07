//Firebase:
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase/client';
import { ErrorAlert } from '../../components/utils/alert';
import { LargeSpin } from '../../components/spinners/spinners';
import { useLoading } from '../../customHooks/useLoading';
import { SuccessNoti } from '../../components/notifications/notification';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './itemListContainer.css'
import { ItemList } from '../itemList/itemList';

//llama a los productos se los pasa a itemList. itemList recibe la lista de productos como una prop desde. ItemList los mapa y se los pasa por prop a item. Item recibe por prop y los detalla
export const ItemListContainer = () => {
    const [loading, startLoading, stopLoading] = useLoading()
    const [products, setProducts] = useState([]);
    const [noti, setNoti] = useState(null);
    const [error, setError] = useState(null);
    const { idCategory } = useParams();
    const getProductsCollection = collection(db, "productos")

    useEffect(() => {
        const fetchProducts = async () => {
            startLoading();
            try {
                const data = await getDocs(getProductsCollection);
                const allProducts = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
                if (idCategory) {
                    const filteredProducts = allProducts.filter((product) => product.category === idCategory)
                    setProducts(filteredProducts)
                } else {
                    setProducts(allProducts)
                }
                setNoti(
                    <SuccessNoti
                        message="Productos cargados"
                        description="Los productos se cargaron correctamente"
                    />
                );
            } catch (error) {
                setError(error.message);
                console.error('error fetching products: ', error)
            } finally {
                stopLoading()
            }
        };
        fetchProducts();
    }, [idCategory])
    if (loading) return <div><LargeSpin /></div>
    if (error) return <div><ErrorAlert message={`Error fetching products: ${error}`} /></div>;

    return (
        <div className='productsContainer'>
            {noti}
            <ItemList products={products} />
        </div>
    )
}

