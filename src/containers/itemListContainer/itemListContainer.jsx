import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../components/data/asyncMock';
import { ProductCard } from './functionCard'
import './itemListContainer.css'
export const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const { idCategory } = useParams();
    console.log('params: ', idCategory);
    console.log("products", products);

    useEffect(() => {
        if (!idCategory) {
            getProducts()
                .then(setProducts)
                .catch(e => console.error(e))
        } else {
            getProducts(idCategory)
                .then(setProducts)
                .catch(e => console.error(e))
        }
    }, [idCategory])

    return (
        <div>
            <h2>{greeting}</h2>
            <div className='productsContainer'>
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        name={product.name}
                        img={product.img}
                        detail={product.detail}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    )
}

ItemListContainer.propTypes = {
    greeting: PropTypes.string.isRequired
}