import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import Header from './Component/Header/Header';

function App  () {
  return (
    <div>
      <Router>
        <Header/>
      </Router>
     
      
    </div>
  );
}

export default App;
