import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout/layout';
import Home from './Components/home';
import AboutUs from './Components/aboutUs';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element = {<Home />}></Route>
            <Route path='/aboutUs' element = {<AboutUs />}></Route>
          </Route>
      </Routes>
    </BrowserRouter>
  </>
);

