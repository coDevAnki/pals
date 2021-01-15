import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Header } from "./components";
import { AuthProvider, ContactsProvider } from "./context";
import routes from "./routes";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <ContactsProvider>
          <BrowserRouter>
            <Header />
            <Switch>
              {routes.map(({ path, component: Component }, index) => (
                <Route
                  key={index}
                  exact
                  path={path}
                  render={() => <Component />}
                />
              ))}
            </Switch>
          </BrowserRouter>
        </ContactsProvider>
      </AuthProvider>
    </div>
  );
};

export default App;
