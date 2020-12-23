import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";

import List from "./components/List";
import Pollpage from "./components/Pollpage";

import Mainpage from "./components/Mainpage";
import Header from "./components/Header";
import Result from "./components/Result";

function App() {
  return (
    <div>
      <div className="container mt-3"></div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Mainpage} />
          <Route exact path="/poll/:id" component={Pollpage} />
          <Route exact path="/result/:id" component={Result} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
