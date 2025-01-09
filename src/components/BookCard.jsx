import { Link } from "react-router-dom";
import AddToCartButton from "./addToCartButton";
import { useCart } from '../context/CartContext';

const BookCard = ({ title, author, description, image, price,id,book, className }) => {
    const { addToCart } = useCart();
    return (
        <>
            <div className="card book-card">
                <img src={image} className={`card-img-top ${className}`} alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{author}</h6>
                    <p className="card-text">{description}</p>
                    <p className="card-text fw-bold">{price}</p>
                    <div className="d-flex justify-content-between">
                        <Link to={`/book/${id}`} className="btn btn-dark">
                            Ver Detalle
                        </Link>
                        <AddToCartButton book={book} addToCart={addToCart} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BookCard