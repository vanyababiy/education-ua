import React from "react";
import {
  BrowserRouter as Router,
  Route,
  // Link,
  Redirect,
  Switch,
  // Link,
} from "react-router-dom";

import Users from "./pages/user/Users";
import NewNews from "./pages/news/NewNews";

const App = () => {
  return (
    <Router>
      <main>
        <Switch>
          <Route path="/" exact>
            <Users />
          </Route>
          <Route path="/news/new" exact>
            <NewNews />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
