
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Header/Shop/Shop';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Header/Review/Review';
import Iventory from './components/Header/Iventory/Iventory';
import NotFound from './components/Header/NotFound/NotFound';
import ProductDetail from './components/Header/ProductDetail/ProductDetail';
function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
           <Route path="/shop">
                <Shop></Shop>
           </Route>
           <Route path="/review">
                <Review></Review>
           </Route>
           <Route path="/iventory">
                <Iventory></Iventory>
           </Route>
           <Route exact path="/">
              <Shop></Shop>
           </Route>
           <Route path="/product/:productKey">
                 <ProductDetail></ProductDetail>
           </Route>
           <Route path="*">
               <NotFound></NotFound>
           </Route>
        </Switch>
      </Router>
      
      
    </div>
  );
}

export default App;

