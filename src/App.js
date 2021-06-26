import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/Home'
import Revel from './pages/Revel'
import Noah from './pages/Noah'
import River from './pages/River'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/revel">
          <Revel />
        </Route>
        <Route exact path="/noah">
          <Noah />
        </Route>
        <Route exact path="/river">
          <River />
        </Route>
      </Switch>
    </Router>

  )
}

export default App;
