import "./App.css";
import CommonHeader from "./common/commonHeader/commonheader";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import HomePage from "./homePage/homePage";
import DiscoverPage from "./discoverPage/discoverPage";
import RulesPage from "./pages/rules/rules";

const App = () => {
  return (
    <>
      <Router>
        <CommonHeader />
        <Switch>
          <Route path="/" exact component={() => <HomePage />} />
          <Route path="/accueil" exact component={() => <HomePage />} />
          <Route path="/découvrir+" exact component={() => <DiscoverPage />} />
          <Route path="/règles" exact component={() => <RulesPage />} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
