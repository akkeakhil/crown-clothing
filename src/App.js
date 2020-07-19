import React from 'react';

import './App.css';

import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepages/homepage.component';

import ShopPage from './pages/shop/shop.component.jsx';


function App() {
  return (
    <div>
    <Switch>
    <Route exact path='/' component={HomePage}/>
    <Route path='/shops' component={ShopPage}/>
    </Switch>
    </div>
  );
}

export default App;


