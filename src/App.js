import React from "react";
import "./App.css";
import HomeScreen from "./components/home/HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FormHandler from "./components/Form/FormHandler";
import NotFound from "./components/pages/not-found/NotFound";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/" exact>
            <HomeScreen />
          </Route>
          <Route path="/react-color">
            <FormHandler />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
