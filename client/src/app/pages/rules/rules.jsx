import styled from "styled-components";
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
import { FirstResponse, SecondResponse, ThirdResponse, QuestionBox } from "../../homePage/handiApprentissage/handiApprentissage";


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
  BasicButton: startLearning,
};

// 2 container //

const SecondButtonsDivFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 2.5rem;
  padding: 1rem;
  width: 100%;
`;

const ContainerContent2 = {
  title: "Exercice N'1",
  description: RulesText,
};

//-------------- 3 container

// const ThirdContainer = styled.div`
//   position: relative;
//   display: flex;
//   width: 100%;
// `;

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

function rules() {
  return (
    <RuleContainer>
      <Container>
        <Separator />
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
                    <FirstResponse>Ouii</FirstResponse>
                    <SecondResponse>Oui</SecondResponse>
                    <ThirdResponse>Pas trop</ThirdResponse>
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
              <QuestionBox>
                {ContainerContent2.description}
              </QuestionBox>
              <SecondButtonsDivFlex>
                <FirstResponse>Main dans le chapeaux</FirstResponse>
                <SecondResponse>Main dans le chapeaux</SecondResponse>
                <ThirdResponse>Main dans le chapeaux</ThirdResponse>
              </SecondButtonsDivFlex>
              <SecondButtonsDivFlex>
                <FirstResponse>Main dans le chapeaux</FirstResponse>
                <SecondResponse>Main dans le chapeaux</SecondResponse>
                <ThirdResponse>Main dans le chapeaux</ThirdResponse>
              </SecondButtonsDivFlex>
              <SecondButtonsDivFlex>
                <FirstResponse>Main dans le chapeaux</FirstResponse>
                <SecondResponse>Main dans le chapeaux</SecondResponse>
                <ThirdResponse>Main dans le chapeaux</ThirdResponse>
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
                    <FirstResponse>Main dans le chapeaux</FirstResponse>
                    <SecondResponse>Mains dans le chapeau</SecondResponse>
                    <ThirdResponse>Main dans le chapeau</ThirdResponse>
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
                    <FirstResponse>Oui</FirstResponse>
                    <SecondResponse>Non</SecondResponse>
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
