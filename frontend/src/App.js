import React, { useState, useCallback } from "react";
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
import { AuthContext } from "./shared/context/auth-context";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Route path="/news/new" exact>
          <NewNews />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/auth">
          <Auth />
        </Route>
        <Route path="/users/signup">
          <Auth />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <ThemeProvider>
      <AuthContext.Provider
        value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
      >
        <CSSReset />
        <Router>
          <MainNavigation />
          <main>
            <Switch>
              {/* <Route path="/" exact>
                <Box>
                  <Heading color="gray.900" textAlign="center">
                    Головна сторінка
                    <span role="img" aria-label="logo">
                      ⚡️
                    </span>
                  </Heading>
                </Box>
              </Route> */}
              {routes}
            </Switch>
          </main>
        </Router>
      </AuthContext.Provider>
    </ThemeProvider>
  );
};

export default App;
