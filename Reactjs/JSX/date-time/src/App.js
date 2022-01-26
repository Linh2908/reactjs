import React from 'react';
import './App.css';

function App() {

 
  return (
    <div>
    <h1>Thoi gian thuc</h1>
      
        <h2> {new Date().toLocaleTimeString()}</h2>
      
    </div>
  );
}

export default App;
