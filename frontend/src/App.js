import React from "react";
import {
  BrowserRouter as Router,
  Route,
  // Link,
  Redirect,
  Switch,
  Link,
} from "react-router-dom";
import Users from "./pages/user/Users";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <h1>Головна сторінка</h1>
          <Link to="/users">
            <h1>ЮЗЕРИ</h1>
          </Link>
        </Route>
        <Route path="/users" exact>
          <Users />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
