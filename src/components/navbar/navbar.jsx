import './navbar.css'
import { Link } from 'react-router-dom';
import { Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { CartWidget } from "../cartWidgets/cartWidgets"


const items = [
    { key: "1", label: <Link to="/category/Consolas">Consolas</Link> },
    { key: "2", label: <Link to="/category/Cámaras">Cámaras</Link> },
    { key: "3", label: <Link to="/category/Laptops">Laptops</Link> },
    { key: "4", label: <Link to="/category/Smartphone">Smartphone</Link> },
    { key: "5", label: <Link to="/category/Televisores">Televisores</Link> },
    { key: "5", label: <Link to="/category/Wearables">Wearables</Link> },
];
export const Navbar = () => {
    return (
        <nav className='contNavBar'>
            <div>
                <Link to={'/'}>
                    <h1 className='titulo'>Bienvenido a Mytechpro</h1><h2>Tu tienda online de tecnología</h2>
                </Link>
            </div>
            <div className='navBar'>
                <ul className='navBarUl'>
                    <Link to={'/'}>
                        <li className='navBarList'>
                            <Button type="primary" className='gradientButton'>Home</Button>
                        </li>
                    </Link>
                    <Link>
                        <li className='navBarList'>
                            <Dropdown menu={{ items }} placement="bottomLeft"
                                arrow={{ pointAtCenter: true, }} overlayClassName='subMenu'>
                                <Link to={'/'}>
                                    <Button type="primary" className='gradientButton'>
                                        Productos <DownOutlined />
                                    </Button>
                                </Link>
                            </Dropdown>
                        </li>
                    </Link>
                    <Link>
                        <li className='navBarList'>
                            <Button type="primary" className='gradientButton' href="Dirección.html">Dirección</Button>
                        </li>
                    </Link>
                    <Link>
                        <li className='navBarList'>
                            <Button type="primary" className='gradientButton' href="Contacto.html">Contacto</Button>
                        </li>
                    </Link>
                    <Link>
                        <li className='navBarList'>
                            <Button type="primary" className='gradientButton' href="Login.html">Login</Button>
                        </li>
                    </Link>
                    <Link to={'/cart'}>
                        <li className='navBarList'><CartWidget /></li>
                    </Link>
                </ul>
            </div>
        </nav >
    )
}