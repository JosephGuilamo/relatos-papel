import { useCart } from "../context/CartContext";
import { useState } from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
    const { cartItems, removeFromCart } = useCart();
    const [isCartOpen, setIsCartOpen] = useState(false);

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/searchpage">
                    <img className="navbar-logo" src="/logo.png" alt="Logo" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/searchpage">Inicio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/checkout">Pagar</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/WhoWeArePage">Quienes somos</Link>
                        </li>
                    </ul>
                </div>

                <div className="d-flex align-items-center position-relative">
                    <span className="me-3 text-white">Hola, Jose</span>
                    <button
                        className="btn btn-outline-light position-relative"
                        onClick={() => setIsCartOpen(!isCartOpen)}
                    >
                        <i className="bi bi-cart4"></i>
                        {cartItems.length > 0 && (
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {cartItems.length}
                            </span>
                        )}
                    </button>

                    {isCartOpen && (
                        <div className="cart-dropdown position-absolute bg-white border shadow-sm">
                            <h6 className="text-center">Carrito</h6>
                            {cartItems.length > 0 ? (
                                cartItems.map((item, index) => (
                                    <div key={index} className="d-flex justify-content-between align-items-center border-bottom py-2">
                                        <div>
                                            <span>{item.title}</span>
                                            <span className="text-muted d-block">${item.price}</span>
                                        </div>
                                        <button className="btn btn-sm btn-danger" onClick={() => removeFromCart(item)}>
                                            Eliminar
                                        </button>
                                    </div>
                                ))
                            ) : (
                                <p className="text-center text-muted">Tu carrito está vacío</p>
                            )}

                            {cartItems.length > 0 && (
                                <div className="d-flex justify-content-center mt-3">
                                    <Link className="btn btn-dark" to="/checkout">
                                        Pagar
                                    </Link>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
