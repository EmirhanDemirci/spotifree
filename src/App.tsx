import React from "react";
import RegisterForm from "./Account/components/RegisterForm";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import LoginForm from "./Account/components/LoginForm";
import ProfilePage from "./Account/components/ProfilePage";
import GuardedRoute from "./GuardedRoute";
import NotGuardedRoute from "./NotGuardedRoute";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <NotGuardedRoute
          path="/"
          isAuthenticated={localStorage.getItem("user")}
          exact
          component={LoginForm}
        />
        <NotGuardedRoute
          path="/register"
          isAuthenticated={localStorage.getItem("user")}
          exact
          component={RegisterForm}
        />
        <GuardedRoute
          path="/profile"
          isAuthenticated={localStorage.getItem("user")}
          exact
          component={ProfilePage}
        />
        <Route path="/" render={() => <div>404</div>} />
      </Switch>
    </BrowserRouter>
  );
};
//make observer to listen to changes in Userstore
export default App;
