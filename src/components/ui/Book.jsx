import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import Rating from "./Rating";
import Price from "./Price";
import { Link } from "react-router-dom";



const Book = ( {book}) => {

    const [img, setImg] = useState();
    const mountedEffect = useRef(true)
    useEffect ( () => {
        const image = new Image();
        image.src = book.url
        image.onload = ()=>{ 
            setTimeout(() => {
                if(mountedEffect.current){
                setImg(image)    
                }
            }, 400);
            
        }
        return () => {
            mountedEffect.current = false;
        }
    })
    
    return (

        

        <div className="book">
            {
                img? <>
                <Link to={`/books/${book.id}`}>
            <figure className="book__img--wrapper">
                <img src={img.src} alt="" />
            </figure>
        </Link>
        <div className="boook__title">
            <Link to={`/books/${book.id}`} className='book__title--link'>{book.title}</Link>
        </div>
        
        <Rating rating = {book.rating}/> 

        <Price salePrice ={book.salePrice} originalPrice = {book.originalPrice}/>  </> : <><div className="book__img--skeleton"></div>
            <div className="skeleton book__title--skeleton"></div>
            <div className="skeleton book__rating--skeleton"></div>
            <div className="skeleton book__price--skeleton"></div></>
            }
        {/* <Link to={`/books/${book.id}`}>
            <figure className="book__img--wrapper">
                <img src={book.url} alt="" onLoad={imageLoaded}/>
            </figure>
        </Link>
        <div className="boook__title">
            <Link to={`/books/${book.id}`} className='book__title--link'>{book.title}</Link>
        </div>
        
        <Rating rating = {book.rating}/>

        <Price salePrice ={book.salePrice} originalPrice = {book.originalPrice}/> */}

       

    </div>
    )
}

export default Book