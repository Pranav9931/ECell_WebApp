// import logo from './logo.svg';
import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";

// Pages Imports
import NavigationPanel from "./pages/nav.component";
import Home from "./pages/home.component";

function App() {
  return (
    <div className="App">
      <NavigationPanel />
      <Router>
        <Switch>
          <Route path="/about">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
