import styled from "styled-components"
import {ImageComponent} from "../../common/utils/image"
import TextComponent from "./textHomeComponent"
import { Wrapper } from "../../common/utils/style"

const HomeWrapper = styled.div`
  text-align: center ;
  background-color: white;
  padding: 25px;
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
