import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Rating from "../components/ui/Rating";
import Price from "../components/ui/Price";
import { books } from "../data";
import Book from "../components/ui/Book";

const BookInfo = ({ books, addToCart, cart }) => {
  const { id } = useParams();
  // + to converse strin to number

  const book = books.find((book) => +book.id === +id);
    
  
  function addBookToCart(book) {
    
    addToCart(book);
   
  }

  function bookExistsOnCart(){
    return cart.find(book => book.id === +id)
    
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books">
                {" "}
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img src={book.url} className="book__selected--img" alt="" />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">{book.title} </h2>
                <Rating rating={book.rating} />
                <Price
                  originalPrice={book.originalPrice}
                  salePrice={book.salePrice}
                />

                <div className="book__summary">
                  <h3 className="book__summary--title">Summary</h3>
                  <p className="book__summary--para">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Officia, natus? Commodi amet natus maiores nesciunt qui est
                    asperiores mollitia. Nemo fugit nobis illo dolorum nam
                    veritatis aliquam atque iure iusto, odio, nostrum veniam
                    assumenda. Cupiditate natus error ab illum fugiat quae,
                    itaque quam numquam officiis. Voluptates est deleniti culpa
                    vel!
                  </p>
                </div>
                { bookExistsOnCart() ? (    
                    <Link to="/cart" className="book__link">
                  <button className="btn">Checkout</button>
                  </Link>
                ) : (
                  <button
                    className="btn"
                    onClick={() => addBookToCart(book)}
                  >Add to Cart</button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">Recommended Books</h2>
            </div>
            <div className="books">
              {books
                .filter((book) => book.rating === 5 && +book.id !== +id)
                .slice(0, 4)
                .map((book) => (
                  <Book book={book} key={book.id} />
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;
