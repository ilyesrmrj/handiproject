import { useEffect } from "react";
import "./App.css";
import CommonHeader from "./common/commonHeader/commonheader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/home/homePage";
import DiscoverPage from "./pages/discover/discoverPage";
import RulesPage from "./pages/rules/rules";
import AppRoute from "./Route";
import Trouble from "./pages/troubles/trouble";
import PricePage from "./pages/price/pricePage";
import Register from "./pages/registerSchool/register";
import { getUser } from "../services/request.service";
import RegisterForm from "./pages/registerForm/registerForm";

const routes = [
  new AppRoute({
    name: "home",
    path: "/",
    reactComponent: <HomePage />,
  }),
  new AppRoute({
    name: "discover",
    path: "/discover",
    reactComponent: <DiscoverPage />,
  }),
  new AppRoute({
    name: "rules",
    path: "/rules",
    reactComponent: <RulesPage />,
  }),
  new AppRoute({
    name: "Les troubles de DYS",
    path: "/les-differents-troubles-de-dys",
    reactComponent: <Trouble />,
  }),
  new AppRoute({
    name: "price",
    path: "/price",
    reactComponent: <PricePage />,
  }),
  new AppRoute({
    name: "Register school",
    path: "/register-school",
    reactComponent: <Register />,
  }),  
  new AppRoute({
    name: "Inscription",
    path: "/register",
    reactComponent: <RegisterForm />,
  }),
];

const App = () => {
  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Router>
        <CommonHeader />
        <Switch>
          {routes.map((route) => (
            <Route
              path={route.path}
              exact
              component={() => route.reactComponent}
            />
          ))}
        </Switch>
      </Router>
    </>
  );
};

export default App;
