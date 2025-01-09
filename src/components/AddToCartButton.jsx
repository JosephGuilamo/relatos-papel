
const AddToCartButton = ({ book, addToCart }) => {
    return (
        <button onClick={() => addToCart(book)} className="btn btn-success">
            Añadir al Carrito
        </button>
    );
};

export default AddToCartButton;