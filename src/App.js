import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Transition } from 'react-router-simple-transition';
import Home from './views/Home';
import IDOs from './views/IDOs';
import Token from './views/Token';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Transition>
            <Home />
          </Transition>
        </Route>
        <Route exact path="/idos">
          <Transition>
            <IDOs />
          </Transition>
        </Route>
        <Route exact path="/token">
          <Transition>
            <Token />
          </Transition>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;