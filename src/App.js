import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LandingPage from "./components/views/LandingPage/LandingPage";
import TestPage from "./components/views/TestPage/TestPage";
import ResultPage from "./components/views/ResultPage/ResultPage";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/test" component={TestPage} />
          <Route path="/result/:MBTI" component={ResultPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
