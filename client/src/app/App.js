import './App.css';
import CommonHeader from './common/commonHeader/commonheader';
import Home from './handiApp/home/home';
import HandiEngagement from './handiApp/handiengagement/handiengagement';
import Handiapprentissage from './handiApp/handiapprentissage/handiapprentissage';
import SupportComponent from './handiApp/supportComponent/supportComponent';



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
