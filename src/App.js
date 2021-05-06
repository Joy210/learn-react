import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./components/home/HomeScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FormHandler from "./components/Form/FormHandler";
import NotFound from "./components/pages/not-found/NotFound";
import LoginScreen from "./components/pages/signup/LoginScreen";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Profile from "./components/pages/profile/Profile";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // logged in
        // console.log(authUser);
        dispatch(
          login({
            uid: authUser.uid,
            email: authUser.email,
          })
        );
      } else {
        // logged out
        dispatch(logout);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route path="/" exact>
              <HomeScreen />
            </Route>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/react-color">
              <FormHandler />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
