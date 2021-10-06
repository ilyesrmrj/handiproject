import styled from "styled-components"
import {ImageComponent} from "../../common/utils/image"
import TextComponent from "./textHomeComponent"
import { Wrapper } from "../../common/utils/style"

const HomeContainer = styled.div`
  text-align: center ;
  background-color: white;
  padding: 25px;
  height: auto;
`

const Home = () => {
    return(
        <HomeContainer>
            <Wrapper>
                <TextComponent/>
                <ImageComponent/>
            </Wrapper>
        </HomeContainer>
    )
}

export default Home
