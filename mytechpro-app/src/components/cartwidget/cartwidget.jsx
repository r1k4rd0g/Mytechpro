
import { Avatar, Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
export const CartWidget = () => (
    <a href="#">
        <Badge count={5}>
            <Avatar shape="square" size="large" icon={<ShoppingCartOutlined/>} />
        </Badge>
    </a>
);
