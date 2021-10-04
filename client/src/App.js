import './App.css';
import styled from 'styled-components'
const MainWrapper = styled.div`
  text-align: center ;
  margin: 25px 50px;
  background-color: white;
  padding: 25px;
  border-radius: 10px;
`

const App = () => {
  return (
    <MainWrapper>
      <h3>Hello Le sang</h3>
    </MainWrapper>
  );
}

export default App;
