import { createContext, useState } from 'react'
import PropTypes from 'prop-types';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    //const [totalItems, setTotalItems] = useState(0);
    //const [totalQuantity, setTotalQuantity] = useState(0);
    //const [totalPrice, setTotalPrice] = useState(0);

    const addToCart = (product, quantity) => {
        const itemExist = cart.find(cartProduct => cartProduct.id === product.id);
        if (itemExist) {
            setCart(cart.map(cartItem =>
                cartItem.id === product.id ? { ...cartItem, quantity: cartItem.quantity + quantity } : cartItem
            ));
        } else {
            setCart([...cart, { ...product, quantity }]);
        }
    };
    const removeFromCart = (itemId) => {
        setCart(cart.filter(cartItem => cartItem.id !== itemId));
    };
    const decreaseFromCart = (itemId) => {
        setCart(prevCart => {
            const existingProduct = prevCart.find(item => item.id === itemId);
            if (existingProduct && existingProduct.quantity > 1) {
                return prevCart.map(item =>
                    item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
                );
            }
            return prevCart.filter(item => item.id !== itemId);
        });
    };
    const addQuantity = (itemId, quantityToAdd) => {
        setCart(prevCart => {
            return prevCart.map(item =>
                item.id === itemId ? { ...item, quantity: item.quantity + quantityToAdd } : item
            )
        })
    }
    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, decreaseFromCart, addQuantity, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}
CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

