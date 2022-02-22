import React from 'react';
import {  Route, Routes } from "react-router-dom";
import Category from './component/Category';
import Product from './component/Product';
function App () {
  return (
    <div>
            <div className="main-route-place">
                <Routes>
                  <Route exact path="/" component={Category} />
                  <Route path="/product/:categoryId" component={Product}/>
                </Routes>
            </div>
        
    </div>
  );
}

export default App;
