<<<<<<< HEAD
import './App.css';
import CommonHeader from './common/commonheader/commonheader';
import HomePage from './homePage/homePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DiscoverPage from './discoverPage/discoverPage';
=======
import "./App.css";
import CommonHeader from "./common/commonHeader/commonheader";
import HomePage from "./homePage/homePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DiscoverPage from "./discoverPage/discoverPage";
import PricePage from "./pricePage/pricePage";

>>>>>>> 66a7886fa99d677b3dee72918c2f4e39c898e332
const App = () => {
  return (
    <>
      <Router>
        <CommonHeader />
        <Switch>
          <Route path="/" exact component={() => <HomePage />} />
          <Route path="/home" exact component={() => <HomePage />} />
          <Route path="/about" exact component={() => <DiscoverPage />} />
          <Route path="/price" exact component={() => <PricePage />} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
