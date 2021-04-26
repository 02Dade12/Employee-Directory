import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Narvbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Narvbar />
      </div>
    </Router>
  );
}

export default App;
