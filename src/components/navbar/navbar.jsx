import './navbar.css'
import { Link } from 'react-router-dom';
import { Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { CartWidget } from "../cartwidget/cartwidget"


const items = [
    { key: "1", label: <Link to="/category/Electrónica">Electrónica</Link> },
    { key: "2", label: <Link to="/category/Calzado">Calzado</Link> },
    { key: "3", label: <Link to="/category/Deportes">Deportes</Link> },
    { key: "4", label: <Link to="/category/Electrodomésticos">Electrodomésticos</Link> },
];
export const Navbar = () => {
    return (
        <nav className='contNavBar'>
            <div>
                <Link to={'/'}>
                    <h1 className='titulo'>Bienvenido a Mytechpro <br></br>Tu tienda online de tecnología</h1>
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
                    <Link to={'/cartwidget'}>
                        <li className='navBarList'><CartWidget /></li>
                    </Link>
                </ul>
            </div>
        </nav >
    )
}