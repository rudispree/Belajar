
import React from 'react';

import { BrowserRouter, Route, Link } from "react-router-dom";
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
 

function App() {
  return (
    <BrowserRouter>
        <div className="grid-container">
          <header className="row">
            <div>
              <a className="brand" href="index.html">amazona</a>
            </div>
            <div>
              <a href="/cart">Cart</a>
              <a href="/signin">Sign In</a>
            </div>
          </header>
          <main>
            <Route path="/" component={HomeScreen} exact></Route>
            <Route path="/product/:id" component={ProductScreen} ></Route>
           
          </main>
          <footer className="row center">All right reserved</footer>
        </div>
  </BrowserRouter>
  );
}

export default App;