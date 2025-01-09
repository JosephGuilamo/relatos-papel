import { useState } from "react";
import NavBar from "./NavBar";
import BookCard from "./BookCard";
import books from "../data/books";
import Footer from "./Footer";

const SearchPage = () => {
    const [searchBook, setSearchBook] = useState("");

    const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(searchBook.toLowerCase())
    );

    return (
        <div>
            <NavBar />
            <div className="container mt-4">
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Buscar libro por título..."
                        value={searchBook}
                        onChange={(e) => setSearchBook(e.target.value)}
                    />
                    <button className="btn btn-outline-secondary" type="button">
                        <i className="bi bi-search"></i>
                    </button>
                </div>
            </div>

            <div className="container mb-5">
                <div className="row">
                    {filteredBooks.map((book) => (
                        <div key={book.id} className="col-md-4 mb-3">
                            <BookCard
                                id={book.id}
                                title={book.title}
                                author={book.author}
                                image={book.image}
                                price={book.price}
                                book={book}

                            />

                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default SearchPage;
