import styled from "styled-components"
import Textapprentissage from "./textapprentissagecomponent"
import { Thefleche } from "../../common/utils/image"

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
margin: 0% 0% 15% 0%;
`

const Composentquestion = styled.div`
text-align: left;
font-size: 100%;
font-family: Segoe UI;
width: 50%;
margin: auto;
padding: 0% 20% 0% 20%;
border: 1.5px blue solid;
border-radius: 10px;
`

const Composentreponse1 = styled.div`
text-align: left;
font-size: 90%;
font-family: Segoe UI;
margin: 0% 43% 0% 14%;
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

<<<<<<< HEAD:client/src/app/handiApp/handiapprentissage/handiapprentissage.js
const Questionflechecomposentall = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin:0% 36% 9% 0%;
padding: 0% 0% 0% 0%;
`


const Handiapprentissage = () => {
=======
const HandiApprentissage = () => {
>>>>>>> aff255f82148eacc1ae1ccca97ec3b2ea4478e61:client/src/app/homePage/handiApprentissage/handiApprentissage.jsx
    return(
        <Wrapper>
            <Textapprentissage/>
            
            
            <Composentquestionsandanswers>
                <Questionflechecomposentall>
                 {Thefleche()}   
                    <Composentquestion>
                        <h5>Quel est l'étymologie du mot handicap ?(hand in cap)</h5>
                    </Composentquestion>    
                </Questionflechecomposentall>
                <Composentreponse1>Main dans le chapeaux</Composentreponse1>
                <Composentreponse2>Mains dans le chapeau</Composentreponse2>
                <Composentreponse3>Main dans le chapeau</Composentreponse3> 
                </Composentquestionsandanswers>
        </Wrapper>
    )
}

<<<<<<< HEAD:client/src/app/handiApp/handiapprentissage/handiapprentissage.js
export default Handiapprentissage
 
=======
export default HandiApprentissage
>>>>>>> aff255f82148eacc1ae1ccca97ec3b2ea4478e61:client/src/app/homePage/handiApprentissage/handiApprentissage.jsx
