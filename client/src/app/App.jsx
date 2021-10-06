import './App.css';
import CommonHeader from './common/commonheader/commonheader';
import HomePage from './homePage/homePage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DiscoverPage from './discoverPage/discoverPage';
const App = () => {
  return (
    <>
      <Router>
        <CommonHeader/>
        <Switch>
          <Route path="/" exact component={() => <HomePage />} />
          <Route path="/accueil" exact component={() => <HomePage />} />
          <Route path="/découvrir+" exact component={() => <DiscoverPage />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
