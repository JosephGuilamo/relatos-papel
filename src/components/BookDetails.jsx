import { useParams, useNavigate  } from "react-router-dom";
import { useCart } from "../context/CartContext";
import NavBar from "./NavBar";
import AddToCartButton from "./addToCartButton";
import books from "../data/books";
import Footer from "./Footer";

const BookDetails = () => {
    const { addToCart } = useCart();
    const { id } = useParams(); 
    const book = books.find((b) => b.id === parseInt(id)); 
    const navigate = useNavigate(); 

    if (!book) {
        return <h1>Libro no encontrado</h1>;
    }

    return (
        <>
            <NavBar />

            <div className="container mt-5">
                <div className="row align-items-center">
                    <div className="col-md-4 text-center">
                        <img className="detail-image"
                            src={book.image}
                            alt={book.title}
                        />
                    </div>
                    <div className="col-md-8">
                        <h1>{book.title}</h1>
                        <p>
                            <strong>Autor:</strong> {book.author}
                        </p>
                        <p>
                            <strong>Descripción:</strong> {book.description}
                        </p>
                        <p>
                            <strong>Precio:</strong> ${book.price.toFixed(2)}
                        </p>
                        <AddToCartButton book={book} addToCart={addToCart} />
                        <button
                            className="btn btn-outline-danger ms-2" // Agregar margen a la izquierda
                            onClick={() => navigate(-1)} // Vuelve a la página anterior
                        >
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default BookDetails;
