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
import NewsItem from "./components/news/NewsItem";

const App = () => {
  return (
    <Router>
      <main>
        <Switch>
          <Route path="/" exact>
            <NewsItem />
          </Route>
          <Route path="/users" exact>
            <Users />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
