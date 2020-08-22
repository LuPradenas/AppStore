import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./index.css";
import Home from './components/Pages/Home/home';
import Register from './components/Pages/Register/register';
import SingUp from  './components/Pages/LogIn/logIn';



const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path='/Register' component={Register}/>
      <Route exact path='/SingUp' component={SingUp}/>
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById("root"));
