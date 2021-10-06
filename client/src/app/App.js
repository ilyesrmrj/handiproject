import './App.css';
import CommonHeader from './common/commonHeader/commonheader';
import Home from './handiApp/home/home';
import HandiEngagement from './handiApp/handiEngagement/handiengagement';
import SupportComponent from './handiApp/supportComponent/supportComponent';



const App = () => {
  return (
    <>
      <CommonHeader/>
      <Home/>
      <HandiEngagement/>
      <SupportComponent/>
    </>
  );
}

export default App;
