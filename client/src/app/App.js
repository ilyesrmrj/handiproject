import './App.css';
import styled from 'styled-components'
import CommonHeader from './common/commonheader/commonheader';
import Home from './handiApp/home/home';
import HandiEngagement from './component/handiengagement/handiengagement';

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
    </>
  );
}

export default App;
