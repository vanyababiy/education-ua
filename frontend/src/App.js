import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { ThemeProvider, CSSReset, Box, Heading } from "@chakra-ui/core";

import NewNews from "./pages/news/NewNews";

const App = () => {
  return (
    <ThemeProvider >
      <CSSReset />
      <Router>
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
          <Redirect to="/" />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default App;
