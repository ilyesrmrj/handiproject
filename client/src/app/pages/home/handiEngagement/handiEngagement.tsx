import styled from "styled-components";
import {
  HandiEngagementText,
  HandiEngagementTitle,
} from "../../../common/utils/text";

const Componentpage = styled.section`
  text-align: left;
  background-color: #0fb7ff3d;
  margin: 0% 0% 0% 0%;
  padding: 10% 10% 10% 10%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Componenttexte = styled.div`
  text-align: left;
  font-size: 1.5em;
  line-height: 1.5;
  margin: 2% 0% 0% 0%;
  padding: 2% 0% 2% 0%;
  color: gray;
`;

const Componentbutton = styled.button`
  text-align: left;
  font-size: 65%;
  margin: 2% 0% 0% 70%;
  padding: 1% 4% 1% 4%;
  border: 1px black solid;
  border-radius: 40px;
  background-color: transparent;
`;
const TitleEngagement = styled.h1`
  font-weight: bold;
  text-align: left;
  width: 100%;
  font-size: 2.5em;
`;

const HandiEngagement = () => (
  <Componentpage>
    <TitleEngagement>{HandiEngagementTitle}</TitleEngagement>
    <Componenttexte>{HandiEngagementText}</Componenttexte>
    <Componentbutton>Découvrez nos valeurs</Componentbutton>
  </Componentpage>
);

export default HandiEngagement;
