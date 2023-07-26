// App.js
import React, { useState, useEffect, } from 'react';


// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { BrowserRouter as Router, Routes, Route ,Link} from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Cart from './components/Cart';
import Header from './components/Header';


import CartIcon from './components/CartIcon';



import './App.css'

// import productsData from './data/products.json';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch cart items from LocalStorage
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    // Save cart items to LocalStorage whenever it changes
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
    console.log(addToCart)
  }
  return (
    <Router>
           <Header/>

       <div>
        <nav >
          <ul className="nav-Element">
            <li className="product-list-list">
              <Link to="/"  className="product-list">Product List</Link>
            </li>
            <li className="cartbuttonlist">
              <Link to="/cart" className="cartbutton">Cart</Link>
              <CartIcon   cartItems={cartItems} />
            </li>
          </ul>
        </nav>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
      </Routes>
      </div>
    </Router>
  );
};

export default App;
