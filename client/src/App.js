import React from "react";
// import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import Register from "./components/Register";
import Login from "./components/Login";
import JokesList from "./components/JokesList";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Register} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/jokes" component={JokesList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
