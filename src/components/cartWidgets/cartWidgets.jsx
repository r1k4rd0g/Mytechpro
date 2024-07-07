
import { Avatar, Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useCart } from '../../customHooks/useCart';
/*export const CartWidget = () => (
    <a href="#">
        <Badge count={5}>
            <Avatar shape="square" size="large" icon={<ShoppingCartOutlined/>} />
        </Badge>
    </a>
);*/

export const CartWidget = () =>{
    const {cart} = useCart();
    const totalItems = cart.reduce((total, item)=> total + item.quantity, 0);

    return(
        <Link to="/cart">
            <Badge count={totalItems}>
                <Avatar shape="square" size="large" icon={<ShoppingCartOutlined/>} />
            </Badge>
        </Link>
    )
}
