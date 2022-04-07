import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Login from './Compontent/Login';
import User from './Compontent/User';

function App() {
  return (
    <Provider store={store}>

    <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/user' element={<User/>}/>
      </Routes>
    </Router>
    </Provider>
  );
}

export default App;
