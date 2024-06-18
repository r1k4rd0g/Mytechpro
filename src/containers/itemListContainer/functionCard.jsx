import './itemListContainer.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export function ProductCard({ id, name, img, detail, price }) {

    console.log('consola desde functionCard.jsx, id de producto:', id)

    return (
        <Card style={{ width: '18rem' }}>
            <div className='cardImgContainer'>
                <Card.Img variant="top" src={img} className="cardImg" />
            </div>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{detail}</Card.Text>
                <Card.Text>${price}</Card.Text>
                <Link to={`/item/${id}`}>
                    <Button variant="primary">Ver</Button>
                </Link>
            </Card.Body>
        </Card>
    );
}

ProductCard.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    detail: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
};