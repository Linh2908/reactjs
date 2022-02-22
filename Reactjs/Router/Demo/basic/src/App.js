import React from 'react';
import { Route, Routes } from "react-router-dom";
import Layout from './component';
import Contact from './component/Contact';
import Home from './component/Home';
import News from './component/News';
function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>} >
          <Route index element={<Home/>}/>
          <Route path='/Contact' element={<Contact/>}/>
          <Route path='/News' element={<News/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
