import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Store from './screens/Store';
import Nav from './Nav';
import SportShoes from './screens/items/SportShoes';
import MySportShoes from './components/MySportShoes';
import SportShirts from './screens/items/SportShirts';
import MySportShirts from './components/MySportShirts';
import SportPants from './screens/items/SportPants';
import MySportPants from './components/MySportPants';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Nav/>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/Store' element={<Store/>}>
        <Route path='/Store/SportShoes' element={<SportShoes/>}>
          <Route path=':sportShoesName' element={<MySportShoes/>}/>
        </Route>
        <Route path='/Store/SportShirts' element={<SportShirts/>}>
          <Route path=':sportShirtsName' element={<MySportShirts/>}/>
        </Route>
        <Route path='/Store/SportPants' element={<SportPants/>}>
          <Route path=':sportPantsName' element={<MySportPants/>}/>
        </Route>
      </Route>
      <Route path='*' element={<h3 className='text-center alert alert-danger'>
        404 - PAGE NOT FOUND</h3>}/>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
