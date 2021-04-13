import React, { useEffect } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { Footer, Header } from "./components";
import { useAuthDispatch, useAuthState } from "./context";
import autoLoginAction from "./context/actions/authActions/autoLoginAction";
import { useSessionStorage } from "./custom-hooks";
import routes from "./routes";

const App = () => {
  const {
    loginUser: { currentUser },
  } = useAuthState();
  const authDispatch = useAuthDispatch();
  const [data, setData] = useSessionStorage("PALS");

  useEffect(() => {
    if (data) {
      autoLoginAction(authDispatch, data);
    }
  }, []);

  useEffect(() => {
    setData(currentUser);
  }, [currentUser]);

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        {routes.map(({ path, component: Component, needsAuth }, index) => (
          <Route key={index} exact path={path}>
            {needsAuth && currentUser === null && data === null ? (
              <Redirect to="/signin" />
            ) : (
              <Component />
            )}
          </Route>
        ))}
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
