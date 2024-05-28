import './navbar.css'
import { Dropdown, Button } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { CartWidget } from "../cartwidget/cartwidget"


const items = [
    { key: "1", label: <a href="Categoria1.html">Categoría 1</a> },
    { key: "2", label: <a href="Categoria2.html">Categoría 2</a> },
    { key: "3", label: <a href="Categoria3.html">Categoría 3</a> },
];
export const Navbar = () => {
    return (
        <nav className='contNavBar'>
            <div>
                <h1 className='titulo'>Bienvenido a Mytechpro <br></br>Tu tienda online de tecnología</h1>
            </div>
            <div className='navBar'>
                <ul className='navBarUl'>
                    <li className='navBarList'>
                        <Button type="primary" className='gradientButton' href="Home.html">Home</Button>
                    </li>
                    <li className='navBarList'>
                        <Dropdown menu={{ items }} placement="bottomLeft"
                            arrow={{ pointAtCenter: true, }}  overlayClassName='subMenu'>
                            <Button type="primary" className='gradientButton'>
                                Productos <DownOutlined />
                            </Button>
                        </Dropdown>
                    </li>
                    <li className='navBarList'>
                        <Button type="primary" className='gradientButton' href="Dirección.html">Dirección</Button>
                    </li>
                    <li className='navBarList'>
                        <Button type="primary" className='gradientButton' href="Contacto.html">Contacto</Button>
                    </li>
                    <li className='navBarList'>
                        <Button type="primary" className='gradientButton' href="Login.html">Login</Button>
                    </li>
                    <li className='navBarList'><CartWidget /></li>
                </ul>
            </div>
        </nav >
    )
}