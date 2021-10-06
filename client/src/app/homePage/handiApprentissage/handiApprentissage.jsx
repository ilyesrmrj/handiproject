import styled from "styled-components";
import { TheFleche } from "../../common/utils/image";
import { Wrapper } from "../../common/utils/style";
import TextCommonComponent from "../../common/commonComponents/textCommonComponent";
import {
  ApprenticeShipButton,
  ApprenticeShipTitle,
  HandiEngagementText,
} from "../../common/utils/text";

const QuestionReponseComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  width: 50%;
  padding-left: 6%;
`;

const Composentquestion = styled.div`
  text-align: right;
  font-size: 25px;
  width: 100%;
  padding: 2% 5%;
  border: 3px #2daae1 solid;
  border-radius: 20px;
  color: gray;
  & ~ p ~ p {
    margin: 0;
    padding: 0;
  }
`;

const FirstResponse = styled.div`
  text-align: left;
  font-size: 25px;
  margin: 15px 5%;
  padding: 1% 3%;
  border: 3px #ea4e1b solid;
  border-radius: 20px;
  color: gray;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    background-color: #ea4e1b;
    color: white;
  }
`;

const SecondResponse = styled.div`
  text-align: left;
  font-size: 25px;
  margin: 15px 5%;
  padding: 1% 3%;
  border: 3px #30ac66 solid;
  border-radius: 20px;
  color: gray;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    background-color: #30ac66;
    color: white;
  }
`;

const ThirdResponse = styled.div`
  text-align: left;
  font-size: 25px;
  margin: 15px 5%;
  padding: 1% 3%;
  border: 3px #f9b232 solid;
  border-radius: 20px;
  color: gray;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    background-color: #f9b232;
    color: white;
  }
`;

const QuestionFlecheComponentAll = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 5% 5%;
  width: 55%;
`;

const ResponseQuestion = () => (
  <>
    <FirstResponse>Main dans le chapeaux</FirstResponse>
    <SecondResponse>Mains dans le chapeau</SecondResponse>
    <ThirdResponse>Main dans le chapeau</ThirdResponse>
  </>
);

const HandiApprentissage = () => {
  return (
    <Wrapper>
      <TextCommonComponent
        title={ApprenticeShipTitle}
        text={HandiEngagementText}
        buttonLabel={ApprenticeShipButton}
      />
      <QuestionReponseComponent>
        <QuestionFlecheComponentAll>
          {TheFleche()}
          <Composentquestion>
            <p>
              Quel est l'étymologie du mot handicap ?<p>(Hand in cap)</p>
            </p>
          </Composentquestion>
        </QuestionFlecheComponentAll>
        <ResponseQuestion />
      </QuestionReponseComponent>
    </Wrapper>
  );
};

export default HandiApprentissage;
