import "./App.css";
import CommonHeader from "./common/commonHeader/commonheader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./homePage/homePage";
import DiscoverPage from "./discoverPage/discoverPage";
import RulesPage from "./pages/rules/rules";
import AppRoute from "./Route";
import Trouble from "./pages/troubles/trouble";
import PricePage from "./pricePage/pricePage";

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
];

const App = () => {
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
