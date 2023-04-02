import React from "react";
import BookImg from '../assets/assets/Undraw_Books.svg'
const Landing = ()=> {

    return (
        <div>
            <section id="landing">
        <header>
            <div className="header__container">
                <div className="header__description">
                    <h1>America's most awarded  online library platform</h1>
                    <h2>Find your favorite book with <span className="purple">Library</span></h2>
                    <a href="#features">
                        <button className="btn">
                            Browse Books
                        </button>
                        
                    </a>
                </div>

                <figure className="header__img--wrapper">
                    <img src={BookImg} alt="" />
                </figure>

            </div>
        </header>
            </section>
        </div>
    )
}

export default Landing