import styled from "styled-components"
import { HandiEngagementText, HandiEngagementTitle } from "../../common/utils/text"

const Componentpage = styled.div`
text-align : left;
font-size : 140%;
font-family: Berlin Sans FB;
background-color : #0fb7ff3d;
margin: 0% 0% 0% 0%;
padding: 10% 10% 10% 10%;
height: 100%;
`

const Componenttexte = styled.div`
text-align: left;
font-family: Segoe UI;
font-size: 90%;
margin: 2% 0% 0% 0%;
padding: 2% 0% 2% 0%;
`

const Componentbutton = styled.button`
text-align: left;
font-size: 65%;
font-family: Segoe UI;
margin: 2% 0% 0% 70%;
padding: 1% 4% 1% 4%;
border: 1px black solid;
border-radius: 40px;
background-color: transparent;
`
const TitleEngagement = styled.h2`
font-weight: lighter;
`

const HandiEngagement = () => (
        <Componentpage>
                <TitleEngagement>{HandiEngagementTitle}</TitleEngagement>
                <Componenttexte>{HandiEngagementText}</Componenttexte>
                <Componentbutton>Découvrez nos valeurs</Componentbutton>
        </Componentpage>
)


export default HandiEngagement
