import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import About from './Component/About';
import Content from './Component/Content';
import Home from './Component/Home';
function App () {
  return (
    <div>
     
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contract">Contract</Link>
                    </li>
                </ul>
 
                <hr />
                <Routes>
                
                    <Route exact path="/" element={<Home/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/contract" element={<Content/>} />
                </Routes>
            </div>
        
    </div>
  );
}

export default App;
