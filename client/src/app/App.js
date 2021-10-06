import './App.css';
import styled from 'styled-components'
import CommonHeader from './common/commonheader/commonheader';
import Home from './handiApp/home/home';
import HandiEngagement from './handiApp/handiengagement/handiengagement';
import Handiapprentissage from './handiApp/handiapprentissage/handiapprentissage';

const HomeWrapper = styled.div`
  text-align: center ;
  background-color: white;
  padding: 25px;
  border-radius: 10px;
`

const App = () => {
  return (
    <>
      <CommonHeader/>
      <HomeWrapper>
        <Home/>
      </HomeWrapper>
      <HandiEngagement/>
      <Handiapprentissage></Handiapprentissage>
    </>
  );
}

export default App;
