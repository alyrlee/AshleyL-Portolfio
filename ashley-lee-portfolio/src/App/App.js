import React, { Component } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Home from "../components/home/Home";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Projects from "../components/projects/Projects";
import "../components/styles/root.css";
import "../components/styles/media.css";



class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/projects" component={Projects} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
