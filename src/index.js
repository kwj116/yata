import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import More from "./More";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyle from "./Global";
import "./reset.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Switch>
      <Route path="/more">
        <More />
        <GlobalStyle />
      </Route>
      <Route path="/login">
        <Login />
        <GlobalStyle />
      </Route>
      <Route path="/signup">
        <Signup />
        <GlobalStyle />
      </Route>
      <Route path="/">
        <Home />
        <GlobalStyle />
      </Route>
    </Switch>
  </Router>
);
