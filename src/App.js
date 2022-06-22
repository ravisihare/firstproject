import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Header from './Frontend/Header';
import Home from './Frontend/Home';
import Menu from './Frontend/Menu';
import CardButton from './Frontend/CardButton';
import ProductImage from './Frontend/ProductImage';
import DisplayProductImage from './Frontend/DisplayProductImage';
import OrderSummary from './Frontend/OrderSummary';
import CheckOut from './Frontend/CheckOut';


function App(props) {
  return (
    <div>
    <BrowserRouter>
      <Routes>
      <Route history={props.history} element={<Header/>} path="/header"/>
        <Route history={props.history} element={<Home/>} path="/home"/>
        <Route history={props.history} element={<Menu/>} path="/menu"/>
        <Route history={props.history} element={<CardButton/>} path="/cardbutton"/>
        <Route history={props.history} element={<ProductImage/>} path="/productimage"/>
        <Route history={props.history} element={<DisplayProductImage/>} path="/displayproductimage"/>
        <Route history={props.history} element={<OrderSummary/>} path="/ordersummary"/>
        <Route history={props.history} element={<CheckOut/>} path="/checkout"/>



      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
