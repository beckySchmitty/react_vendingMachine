import React from "react";

import Candy from "./Candy";
import Cookie from "./Cookie";
import Chip from "./Chip";
import NavBar from "./NavBar";

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Route exact path="/candy">
          <Candy />
        </Route>
        <Route exact path="/cookie">
          <Cookie />
        </Route>
        <Route exact path="/chip">
          <Chip />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;