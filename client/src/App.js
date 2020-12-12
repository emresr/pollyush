import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";

import aaInput from "./components/aaInput";
import aaList from "./components/aaList";

function App() {
  return (
    <div>
      <div className="container mt-3">
        <h2>Popells</h2>
        <Switch>
          <Route exact path="/addpoll" component={aaInput} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
