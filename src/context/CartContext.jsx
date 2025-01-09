import { createContext, useState, useEffect, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {

    const initialCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    const [cartItems, setCartItems] = useState(initialCart);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (item) => {
        setCartItems((prevItems) => [...prevItems, item]);
    };

    const removeFromCart = (item) => {
        setCartItems((prevItems) => prevItems.filter((i) => i.id !== item.id));
    };

    const removeAllFromCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, removeAllFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
