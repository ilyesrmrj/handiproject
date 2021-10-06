import styled from "styled-components";
import { TheFleche } from "../../common/utils/pictures";
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
  border: 3px transparent solid;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 20px;
  color: rgba(45, 170, 225);
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
  border: 2px #e2e2e2cc solid;
  background-color: #fff;
  border-radius: 15px;
  color: #ea4e1b;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    border: 2px #ea4e1b solid;
    box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.2);
  }
`;

const SecondResponse = styled.div`
  text-align: left;
  font-size: 25px;
  margin: 15px 5%;
  padding: 1% 3%;
  border: 2px #e2e2e2cc solid;
  background-color: #fff;
  border-radius: 15px;
  color: #30ac66;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    border: 2px #30ac66 solid;
    box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.2);
  }
`;

const ThirdResponse = styled.div`
  text-align: left;
  font-size: 25px;
  margin: 15px 5%;
  padding: 1% 3%;
  border: 2px #e2e2e2cc solid;
  background-color: #fff;
  border-radius: 15px;
  color: #f9b232;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    border: 2px #f9b232 solid;
    box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.2);
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
