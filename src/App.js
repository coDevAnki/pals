import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Header } from "./components";
import { useAuthState } from "./context";
import routes from "./routes";

const App = () => {
  const {
    loginUser: { currentUser },
  } = useAuthState();
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        {routes.map(({ path, component: Component, needsAuth }, index) => (
          <Route key={index} exact path={path}>
            {needsAuth && currentUser === null ? (
              <Redirect to="/signin" />
            ) : (
              <Component />
            )}
          </Route>
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
