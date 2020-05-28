import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
} from "react-router-dom";
import Users from "./pages/user/Users";
import NewNews from "./pages/news/NewNews";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/users" exact>
          <Users />
        </Route>
        <Route path="/news/new" exact>
          <NewNews />
        </Route>
        <Route path="/" exact>
          <h1>Головна сторінка</h1>
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default App;
