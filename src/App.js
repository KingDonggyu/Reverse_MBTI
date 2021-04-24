import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/views/LandingPage/LandingPage";
import TestPage from "./components/views/TestPage/TestPage";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/test" component={TestPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
