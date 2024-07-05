import PropTypes from 'prop-types';
import '../itemListContainer/itemListContainer.css'
import {ProductCard} from '../../components/item/itemCard'

export const ItemList = ({ products }) => {

    return (
        <div className="productsContainer">
            {products.map(product => (
                <ProductCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    img={product.img}
                    detail={product.detail}
                    price={product.price}
                />
            ))}
        </div>
    )
}

ItemList.propTypes = {
    products: PropTypes.array.isRequired,
};

