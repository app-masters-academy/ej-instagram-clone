import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { LoginView } from "./components/LoginView";
import { Timeline as TimelineView } from "./components/Timeline";
import { PostView } from "./components/PostView";

import "./App.css";

const PrivatesRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/post/:id" component={PostView} />
        <Route path="/" exact={true} component={TimelineView} />
        <Route path="*">
          <div>
            <h1>404 - Não tem nada por aqui</h1>
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

const PublicRoutes = (props) => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <LoginView
            onLogin={(user) => {
              user ? props.onLogin(true) : props.onLogin(false);
            }}
          />
        </Route>
        <Route path="*">
          <div>
            <h1>404 - Não tem nada por aqui</h1>
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

function App() {
  const accessToken = localStorage.getItem("accessToken");
  const [isAuthenticated, setIsAuthenticated] = React.useState(!!accessToken);

  if (isAuthenticated) {
    return <PrivatesRoutes />;
  } else {
    return <PublicRoutes onLogin={setIsAuthenticated} />;
  }
}

export default App;
