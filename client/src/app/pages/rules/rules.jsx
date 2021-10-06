import styled from "styled-components";
import { ButtonApprentice } from "../../common/utils/style";
import { RulesText, RulesTitle, startLearning } from "../../common/utils/text";
import {
  AlignItemsCenter,
  Column,
  Container,
  FlexContainer,
  ContainerFluid,
  Separator,
} from "./components/grid";
import {
  TextArea,
  TextAreaWithButton,
  TextParagraph,
} from "./components/textArea";

// const Container = styled.div`
//   text-align: center;
//   background-color: white;
//   padding: 25px;
//   height: auto;
// `;
const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const FlexRowContainer = styled.div`
  display: flex;
  flex-direction: row;

  height: auto;
  background-color: white;
  max-width: 50%;
  width: 100%;

  justify-content: center;
`;

const RuleContainer = styled.div`
  display: block;
`;

const QuestionBox = styled.div`
  position: relative;
  padding: 3.5rem 7rem;
  border: 2px solid #2daae1;
  border-radius: 24px;
`;

const QuestionButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding: 1rem;
`;

const ContainerContent1 = {
  title: RulesTitle,
  description: RulesText,
  buttonApprentice: startLearning,
};

// 2 container //

const SecondButtonsDivFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 50%;
  gap: 2.5rem;
  padding: 1rem;
`;

const SecondQuestionBox = styled.div`
  position: relative;
  padding: 3.5rem;
  border: 2px solid #2daae1;
  border-radius: 24px;
  width: 50%;
`;

const ContainerContent2 = {
  title: "Exercice N'1",
  description: RulesText,
};

//-------------- 3 container

const ThirdContainer = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`;

const ThirdLeftContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background-color: #fbe3da;
  width: 75%;
`;

const ThirdLeftContainerTextArea = styled.div`
  position: relative;
  width: 75%;
  margin: auto;
`;

const thirdContainerContent = {
  title: "Exercice N'2",
  description: RulesText,
};

// 4 container (3ieme exerice)
const fourthContainerData = {
  title: "Exercice N'3",
  description: RulesText,
};

const Composentreponse1 = styled.div`
  text-align: left;
  font-size: 90%;
  font-family: Segoe UI;

  padding: 1% 8% 1% 9%;
  border: 1.5px red solid;
  border-radius: 40px;
`;

const Composentreponse2 = styled.div`
  text-align: left;
  font-size: 90%;
  font-family: Segoe UI;

  padding: 1% 8% 1% 9%;
  border: 1.5px green solid;
  border-radius: 40px;
`;

const Composentreponse3 = styled.div`
  text-align: left;
  font-size: 90%;
  font-family: Segoe UI;

  padding: 1% 8% 1% 9%;
  border: 1.5px orange solid;
  border-radius: 40px;
`;

function rules() {
  return (
    <RuleContainer>
      <Container>
        <FlexContainer>
          <FlexRowContainer>
            <Column>
              <TextAreaWithButton props={ContainerContent1} />
            </Column>
          </FlexRowContainer>
          <FlexRowContainer>
            <AlignItemsCenter>
              <Column>
                <AlignItemsCenter>
                  <QuestionBox>Tu aime HANDI ?</QuestionBox>
                  <QuestionButtons>
                    <ButtonApprentice>Pas trop</ButtonApprentice>
                    <ButtonApprentice>Pas trop</ButtonApprentice>
                    <ButtonApprentice>Pas trop</ButtonApprentice>
                  </QuestionButtons>
                </AlignItemsCenter>
              </Column>
            </AlignItemsCenter>
          </FlexRowContainer>
        </FlexContainer>
      </Container>
      <Separator />
      <Separator />
      <Container>
        <Column>
          <TextArea props={ContainerContent2} />
        </Column>

        <AlignItemsCenter>
          <Column>
            <AlignItemsCenter>
              <SecondQuestionBox>
                {ContainerContent2.description}
              </SecondQuestionBox>
              <SecondButtonsDivFlex>
                <ButtonApprentice>Main dans le chapeaux</ButtonApprentice>
                <ButtonApprentice>Main dans le chapeaux</ButtonApprentice>
                <ButtonApprentice>Main dans le chapeaux</ButtonApprentice>
              </SecondButtonsDivFlex>
              <SecondButtonsDivFlex>
                <ButtonApprentice>Main dans le chapeaux</ButtonApprentice>
                <ButtonApprentice>Main dans le chapeaux</ButtonApprentice>
                <ButtonApprentice>Main dans le chapeaux</ButtonApprentice>
              </SecondButtonsDivFlex>
              <SecondButtonsDivFlex>
                <ButtonApprentice>Main dans le chapeaux</ButtonApprentice>
                <ButtonApprentice>Main dans le chapeaux</ButtonApprentice>
                <ButtonApprentice>Main dans le chapeaux</ButtonApprentice>
              </SecondButtonsDivFlex>
            </AlignItemsCenter>
          </Column>
        </AlignItemsCenter>
      </Container>
      <Separator />
      <Separator />
      <ContainerFluid>
        <FlexContainer>
          <ThirdLeftContainer>
            <ThirdLeftContainerTextArea>
              <Separator />
              <Separator />
              <TextArea props={thirdContainerContent}></TextArea>
              <Separator />
              <Separator />
            </ThirdLeftContainerTextArea>
          </ThirdLeftContainer>
          <FlexRowContainer>
            <AlignItemsCenter>
              <Column>
                <AlignItemsCenter>
                  <QuestionBox>
                    Quel est l'etymologie du mot "handicap" ?
                  </QuestionBox>
                  <QuestionButtons>
                    <Composentreponse1>Main dans le chapeaux</Composentreponse1>
                    <Composentreponse2>Mains dans le chapeau</Composentreponse2>
                    <Composentreponse3>Main dans le chapeau</Composentreponse3>
                  </QuestionButtons>
                </AlignItemsCenter>
              </Column>
            </AlignItemsCenter>
          </FlexRowContainer>
        </FlexContainer>
      </ContainerFluid>
      <Container>
        <Separator />
        <Separator />
        <Column>
          <TextArea props={fourthContainerData} />
        </Column>
       

        <FlexContainer>
          <FlexRowContainer>
            <Column>
              <TextParagraph props={fourthContainerData} />
              <TextParagraph props={fourthContainerData} />
              <TextParagraph props={fourthContainerData} />
              <Separator />
            </Column>
          </FlexRowContainer>
          <FlexRowContainer>
            <AlignItemsCenter>
              <Column>
                <AlignItemsCenter>
                  <QuestionBox>
                    Quel est l'étimologie du mot 'handicap' (Hand in cap)
                  </QuestionBox>
                  <QuestionButtons>
                    <Composentreponse1>Oui</Composentreponse1>
                    <Composentreponse2>Non</Composentreponse2>
                  </QuestionButtons>
                </AlignItemsCenter>
              </Column>
            </AlignItemsCenter>
          </FlexRowContainer>
        </FlexContainer>
      </Container>
    </RuleContainer>
  );
}

export default rules;
