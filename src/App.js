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
          <Route exact path="/Reverse_MBTI" component={LandingPage} />
          <Route exact path="/Reverse_MBTI/test" component={TestPage} />
          <Route path="/Reverse_MBTI/result/:MBTI" component={ResultPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
