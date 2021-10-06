import styled from "styled-components"
import Textapprentissage from "./textapprentissagecomponent"

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Composentquestionsandanswers = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 55%;
padding-left: 6%;
margin: 0% 0% 10% 0%;
`

const Composentquestion = styled.div`
text-align: left;
font-size: 110%;
font-family: Segoe UI;
width: 60%;
margin: 0% 60% 0% 0%;
padding: 10% 10% 10% 10%;
border: 1.5px blue solid;
border-radius: 10px;
`

const Composentreponse1 = styled.div`
text-align: left;
font-size: 90%;
font-family: Segoe UI;
margin: 10% 43% 0% 14%;
padding: 1% 8% 1% 9%;
border: 1.5px red solid;
border-radius: 40px;
`

const Composentreponse2 = styled.div`
text-align: left;
font-size: 90%;
font-family: Segoe UI;
margin: 5% 43% 0% 14%;
padding: 1% 8% 1% 9%;
border: 1.5px green solid;
border-radius: 40px;
`

const Composentreponse3 = styled.div`
text-align: left;
font-size: 90%;
font-family: Segoe UI;
margin: 5% 43% 0% 14%;
padding: 1% 8% 1% 9%;
border: 1.5px orange solid;
border-radius: 40px;
`

const Handiapprentissage = () => {
    return(
        <Wrapper>
            <Textapprentissage/>
            <Composentquestionsandanswers>
            <Composentquestion>
                    <h4>Quel est l'étymologie du mot handicap ?(hand in cap)</h4>
                    </Composentquestion>
                <Composentreponse1>Main dans le chapeaux</Composentreponse1>
                <Composentreponse2>Mains dans le chapeau</Composentreponse2>
                <Composentreponse3>Main dans le chapeau</Composentreponse3> 
                </Composentquestionsandanswers>
        </Wrapper>
    )
}

export default Handiapprentissage