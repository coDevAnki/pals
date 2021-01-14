import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthProvider, ContactsProvider } from "./context";
import routes from "./routes";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <ContactsProvider>
          <BrowserRouter>
            <Switch>
              {routes.map(({ path, component: Component }) => (
                <Route exact path={path} render={() => <Component />} />
              ))}
            </Switch>
          </BrowserRouter>
        </ContactsProvider>
      </AuthProvider>
    </div>
  );
};

export default App;
