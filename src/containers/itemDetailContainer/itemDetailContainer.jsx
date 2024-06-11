
import PropTypes from 'prop-types';
import { getProductById } from '../../components/data/asyncMock';
import { useParams } from 'react-router-dom';


export const ItemDetail = () => {
    const id  = useParams()
    console.log('id de producto por parámetro', id)
    const product = getProductById(id)
    console.log('consola 21', product)



    return (
        <div className="product-detail">
            <h2>{product.name}</h2>
            <div className="product-detail-image">
                <img src={product.img} alt={product.name} />
            </div>
            <p>{product.detail}</p>
            <p>${product.price}</p>
        </div>
    );
};

ItemDetail.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired,
            detail: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
        })
    ).isRequired,
};