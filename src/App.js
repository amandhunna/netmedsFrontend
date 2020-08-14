import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import PrivateLayout from "./lib/layout/privateLayout/PrivateLayout";
import PublicLayout from "./lib/layout/publicLayout/PublicLayout";
import Page404 from "./pages/page404";
import publicRoutes from "./publicRoutes";
import privateRoutes from "./privateRoutes";

function App() {


  return (
    <BrowserRouter>
      <Switch>
        {publicRoutes.map((route, key) => {
          const { component, path, titleComponents } = route;
          return (
            <Route
              exact
              path={path}
              key={key}
              render={(route) =>
                <PublicLayout
                  route={route}
                  component={component}
                  titleComponents={titleComponents}
                />
              }
            />
          )
        })}
        {privateRoutes.map((route, key) => {
          const { component, path, titleComponents } = route;
          return (
            <Route
              exact
              path={path}
              key={key}
              render={(route) =>
                <PrivateLayout
                  route={route}
                  component={component}
                  titleComponents={titleComponents}
                />
              }
            />
          )
        })}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
