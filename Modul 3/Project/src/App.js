import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

import "./App.css";

function App() {
  return (
    <Router>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Router>
  );
}

export default App;
