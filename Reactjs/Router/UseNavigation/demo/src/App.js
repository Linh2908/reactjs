import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './component';
import PublicPage from './component/PublicPage';

function App () {
  return (
    <>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' index element={<PublicPage/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
