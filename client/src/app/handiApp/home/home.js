import styled from "styled-components"
import {ImageComponent} from "./image"
import TextComponent from "./text"

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

const Home = () => {
    return(
        <Wrapper>
            <TextComponent/>
            <ImageComponent/>
        </Wrapper>
    )
}

export default Home
