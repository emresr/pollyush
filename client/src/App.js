import React from "react";
import { BrowserRouter,Switch, Route, Link } from "react-router-dom";
import "./App.css";

import AaInput from "./components/AaInput";
import AaList from "./components/AaList";


function App() {
  return (
    <div>
      <div className="container mt-3">
        <h2>Popells</h2>
            </div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/addpoll" component={AaInput} />
          <Route exact path="/list" component={AaList} />

        </Switch>
      </BrowserRouter>


    </div>
  );
}

export default App;
