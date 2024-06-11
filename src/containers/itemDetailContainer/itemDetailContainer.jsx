
import PropTypes from 'prop-types';
import { getProducts } from '../../components/data/asyncMock';
import { useParams } from 'react-router-dom';


export const ItemDetail = () => {
    const { id } = useParams()
    const { products } = getProducts()
    console.log('consola 21', products)
    const productFind = products.find (p => p.id === id)
    if(!productFind){
        //alert('Producto no encontrado');
            return null;
    }


    return (
        <div className="product-detail">
            <h2>{productFind.name}</h2>
            <div className="product-detail-image">
                <img src={productFind.img} alt={productFind.name} />
            </div>
            <p>{productFind.detail}</p>
            <p>${productFind.price}</p>
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