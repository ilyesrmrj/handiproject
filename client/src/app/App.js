import './App.css';
import CommonHeader from './common/commonheader/commonheader';
import Home from './handiApp/home/home';
import HandiEngagement from './handiApp/handiengagement/handiEngagement'
import SupportComponent from './handiApp/supportComponent/supportComponent';
import Handiapprentissage from './handiApp/handiapprentissage/handiapprentissage';


const App = () => {
  return ( 
    <>
      <CommonHeader/>
      <Home/>
      <HandiEngagement/>
      <Handiapprentissage/>
      <SupportComponent/>
    </>
  );
}

export default App;
