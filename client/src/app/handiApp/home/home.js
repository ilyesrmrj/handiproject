import styled from "styled-components"
import {ImageComponent} from "./image"
import TextComponent from "./text"

const HomeWrapper = styled.div`
  text-align: center ;
  background-color: white;
  padding: 25px;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

const Home = () => {
    return(
        <HomeWrapper>
            <Wrapper>
                <TextComponent/>
                <ImageComponent/>
            </Wrapper>
        </HomeWrapper>
    )
}

export default Home
