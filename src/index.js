import React from "react";
import ReactDOM from "react-dom";
import { Router, browserHistory, Route } from 'react-router';

import App from "./App";
import Login from "./scenes/Login";
import Register from "./scenes/Register";
import Home from "./scenes/Home";

ReactDOM.render(
  <React.StrictMode>
  <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="login" component={Login}/>
        <Route path="register" component={Register}/>
        <Route path="home" component={Home}/>
      </Route>
  </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
