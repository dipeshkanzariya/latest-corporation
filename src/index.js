import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout/layout';
import Home from './Components/home';
import AboutUs from './Components/aboutUs';
import ContactUs from './Components/contact';
import OurTeam from './Components/team';
import BrassProducts from './Components/Products/Brass/brass';
import BrassProductById from './Components/Products/Brass/brassProductById';
import KitchenSink from './Components/Products/Kitchen Sink/kitchenSink';
import KitchenSinkById from './Components/Products/Kitchen Sink/kitchenSinkById';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index  element = {<Home />}></Route>
            <Route path='/aboutUs' element = {<AboutUs />}></Route>
            <Route path='/contact' element = {<ContactUs />}></Route>
            <Route path='/team' element = {<OurTeam />}></Route>
            <Route path='/products/brass' element = {<BrassProducts />}></Route>
            <Route path='/products/brass/:id' element = {<BrassProductById />}></Route>
            <Route path='/products/kitchensink' element = {< KitchenSink/>}></Route>
            <Route path='/products/kitchensink/:id' element = {< KitchenSinkById/>}></Route>

          </Route>
      </Routes>
    </BrowserRouter>
  </>
);

