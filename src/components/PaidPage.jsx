import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

const PaidPage = () => {
    return (
        <>
            <NavBar />
            <div className="paid-page-container">
                <div className="paid-content">
                    <i className="bi bi-check-circle-fill paid-icon"></i>
                    <h1>¡Pago realizado correctamente!</h1>
                    <p>Gracias por su compra.</p>
                    <Link to="/SearchPage" className="btn btn-dark mt-3">
                        Volver al inicio
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default PaidPage;
