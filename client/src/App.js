import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import "./App.css";

import AaInput from "./components/AaInput";
import List from "./components/List";
import Pollpage from "./components/Pollpage";
import CcPollpage from "./components/CcPollpage";

import Mainpage from "./components/Mainpage";
import Header from "./components/Header";
import Result from "./components/Result";

import Form from "./components/Form";
function App() {
  return (
    <div>
      <div className="container mt-3"></div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Mainpage} />
          <Route exact path="/add" component={AaInput} />
          // <Route exact path="/form" component={Form} />
          <Route exact path="/poll/:id" component={Pollpage} />
          <Route exact path="/result/:id" component={Result} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
