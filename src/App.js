// import logo from './logo.svg';
import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages Imports
import NavigationPanel from "./pages/nav.component";
import Home from "./pages/home.component";
import Blog from "./pages/blog.component";

function App() {
  return (
    <div className="App">
      <NavigationPanel />
      <Routes>
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<Home />} />
      </Routes>
      {/* <Home /> */}
    </div>
  );
}

export default App;
