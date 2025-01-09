import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";


const CheckoutPage = () => {
    const { cartItems, removeFromCart, removeAllFromCart } = useCart();
    const navigate = useNavigate();
    const total = cartItems.reduce((acc, item) => acc + parseFloat(item.price), 0);
    const formattedTotal = total.toFixed(2);

    return (
        <>
            <NavBar />
            <div className="container mt-5">
                 <div className="header">
                    <h2 className="text-center mb-0">Resumen de tu compra</h2>
                </div>

                <div>
                    {cartItems.length > 0 ? (
                        <>
                        
                            <div className="cart-items-container">
                                {cartItems.map((item, index) => (
                                    <div key={index} className="cart-item">
                                        <div className="cart-item-details">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="cart-item-image"
                                            />
                                            <div>
                                                <h6>{item.title}</h6>
                                                <p className="text-muted mb-0">${item.price.toFixed(2)}</p>
                                            </div>
                                        </div>
                                        <button
                                            className="btn btn-sm btn-danger"
                                            onClick={() => removeFromCart(item)}
                                        >
                                            Eliminar
                                        </button>
                                    </div>
                                ))}
                            </div>
                      
                            <div className="total-container">
                                <h5 className="mb-0">Total a pagar:</h5>
                                <h5 className="mb-0">${formattedTotal}</h5>
                            </div>

                            <div className="action-buttons">
                                <button
                                    className="btn btn-secondary me-2"
                                    onClick={() => window.history.back()}
                                >
                                    Cancelar
                                </button>
                                <button
                                    className="btn btn-dark"
                                    onClick={() => {
                                        alert("¡Compra realizada con éxito!");
                                        removeAllFromCart();
                                        navigate("/paid");
                                    }}
                                    
                                >
                                    Confirmar Pago
                                </button>
                            </div>
                        </>
                    ) : (
                        <p className="text-center text-muted">Tu carrito está vacío. ¡Agrega algunos libros!</p>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default CheckoutPage;
