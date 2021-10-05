import './App.css';
import styled from 'styled-components'
import CommonHeader from './component/commonheader/commonheader';
import HandiEngagement from './component/handiengagement/handiengagement';

const MainWrapper = styled.div`
  text-align: center ;
  margin: 25px 50px;
  background-color: white;
  padding: 25px;
  border-radius: 10px;
`

const App = () => {
  return (
    <>
    <CommonHeader/>
    <HandiEngagement/>
    <MainWrapper>
      <h3>Hello Le sang</h3>
    </MainWrapper>
    </>
  );
}

export default App;
