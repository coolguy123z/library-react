import Nav from "./components/nav";
import Landing from "./components/landingpage";
import Highlights from "./components/highlights";
import Features from "./components/ui/features";
import DiscountBook from "./components/ui/DiscountBook";
import Explore from "./components/Explore";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import Bookss from "./pages/Books";
import Book from "./components/ui/Book";
import { books } from "./data";
import BookInfo from "./pages/BookInfo";
import Cart from "./pages/Cart";
import React, { useEffect, useState } from "react";


function App() {
  const [cart,setCart] = useState([]);

  function addToCart(book){
    setCart([...cart,{ ...book, quantity: 1}])
    }

    function removeItem(item){
        setCart(cart.filter( book =>book.id !== item.id ))
    }

    function numberOfItem (){
      let counter =0;
      cart.forEach ( item => {
        counter += item.quantity
      })
      return counter
    }

    //book value to find which one to increase quantity
      function changeQuantity(book, quantity){
        setCart(cart.map(item => {
          return (item.id === book.id)?
             {
              ...item, quantity: +quantity
             }: item
          
            
        }))
      }

  useEffect ( ()=> {
    console.log(cart)
  },[cart])

  return (


    <Router>
    <div className="App">
      
      <Nav numberOfItem = {numberOfItem()} />
      <Route  path="/"  exact component={Home}/>
      <Route path="/books" exact render={ () =>  <Bookss books= {books}/>}/>
      <Route path="/books/:id" exact render={ () =>  <BookInfo books= {books} addToCart={addToCart} cart={cart} /> } />
      <Route path="/cart" render={ () =>  <Cart books= {books} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem}/>}/>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
