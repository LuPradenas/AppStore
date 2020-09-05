import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './components/Pages/Home/home';
import Register from './components/Pages/Register/register';
import SingUp from  './components/Pages/LogIn/logIn';
import Store from './components/Pages/Store/store';
import Storedev from './components/Pages/Store/storedev';
import Default from './components/Pages/Default/default';
import Cart from './components/Cart/cart';


const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path='/Register' component={Register}/>
      <Route exact path='/SingUp' component={SingUp}/>
      <Route exact path='/Store' component={Store}/>
      <Route exact path='/Cart' component={Cart}/>
      <Route exact path='/StoreDevs' component={Storedev}/>
      <Route component={Default} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
