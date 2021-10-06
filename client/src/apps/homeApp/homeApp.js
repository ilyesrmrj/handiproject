import './App.css';
import CommonHeader from './common/commonHeader/commonheader';
import Home from './homeApp/home/home';
import HandiEngagement from './homeApp/handiengagement/handiengagement';
import Handiapprentissage from './homeApp/handiapprentissage/handiapprentissage';
import SupportComponent from './homeApp/supportComponent/supportComponent';



const HomeApp = () => {
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

export default HomeApp;
