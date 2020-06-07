import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { ThemeProvider, CSSReset, Box, Heading } from "@chakra-ui/core";

import NewNews from "./pages/news/NewNews";
import Users from "./pages/user/Users";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Auth from "./pages/user/Auth";

const App = () => {
  return (
    <ThemeProvider>
      <CSSReset />
      <Router>
        <MainNavigation />
        <main>
          <Switch>
            <Route path="/" exact>
              <Box>
                <Heading color="gray.900" textAlign="center">
                  Головна сторінка
                  <span role="img" aria-label="logo">
                    ⚡️
                  </span>
                </Heading>
              </Box>
            </Route>
            <Route path="/news/new" exact>
              <NewNews />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/auth">
              <Auth />
            </Route>

            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    </ThemeProvider>
  );
};

export default App;
