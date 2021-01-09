import React from "react";
import {Navbar} from "./components";
import { HashRouter as Router, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Contact from "./pages/Contact";


function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/Pricing" component={Pricing} />
      <Route path="/Contact" component={Contact}/>
      <Route path="/About" component={About}/>
      {/* <Route path="/" component={Main}/> */}
    </Router>
  );
}

export default App;
