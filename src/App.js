import React from "react";
import {Navbar} from "./components";
import { HashRouter as Router, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Pricing from "./pages/Pricing";


function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/Pricing" component={Pricing} />
      <Route path="/" exact/>
    </Router>
  );
}

export default App;
