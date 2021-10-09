import styled from "styled-components";
import { RulesText, RulesTitle, startLearning, LoremIpsum, ExoTwo, ExoOne } from '../../common/utils/text';
import {
  AlignItemsCenter,
  Column,
  Container,
  ContainerFluid,
  Separator,
} from "./components/grid";
import {
  TextArea,
  TextAreaWithButton,
  TextParagraph,
} from "./components/textArea";
import {
  FirstResponse,
  SecondResponse,
  ThirdResponse,
  QuestionBox
} from '../home/handiApprentissage/handiApprentissage';
import {
  SmallQuestionBox,
  LargeFirstResponse,
  LargeSecondResponse,
  LargeThirdResponse,
} from "../../common/utils/style";

const FlexContainer = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  min-height: inherit;
  height: inherit;
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
  description: ExoOne,
};

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
  description: ExoTwo,
};

// 4 container (3ieme exerice)
const fourthContainerData = {
  title: "Exercice N'3",
  description: RulesText,
  loremIpsum: LoremIpsum
};

function rules() {
  return (
    <>
      <Container>
        <FlexContainer>
          <FlexRowContainer>
            <Column>
              <TextAreaWithButton title={ContainerContent1.title} description={ContainerContent1.description} buttonApprentice={ContainerContent1.BasicButton} />
            </Column>
          </FlexRowContainer>
          <FlexRowContainer>
            <AlignItemsCenter>
              <Column>
                <AlignItemsCenter>
                  <SmallQuestionBox>Tu aime HANDI ?</SmallQuestionBox>
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

      <Container>
        <Column>
          <TextArea title={ContainerContent2.title} description={ContainerContent2.description} />
        </Column>

        <AlignItemsCenter>
          <Column>
            <AlignItemsCenter>
              <QuestionBox>{ContainerContent2.description}</QuestionBox>
              <SecondButtonsDivFlex>
                <LargeFirstResponse>Main dans le chapeaux</LargeFirstResponse>
                <LargeSecondResponse>Main dans le chapeaux</LargeSecondResponse>
                <LargeThirdResponse>Main dans le chapeaux</LargeThirdResponse>
              </SecondButtonsDivFlex>
              <SecondButtonsDivFlex>
                <LargeFirstResponse>Main dans le chapeaux</LargeFirstResponse>
                <LargeSecondResponse>Main dans le chapeaux</LargeSecondResponse>
                <LargeThirdResponse>Main dans le chapeaux</LargeThirdResponse>
              </SecondButtonsDivFlex>
              <SecondButtonsDivFlex>
                <LargeFirstResponse>Main dans le chapeaux</LargeFirstResponse>
                <LargeSecondResponse>Main dans le chapeaux</LargeSecondResponse>
                <LargeThirdResponse>Main dans le chapeaux</LargeThirdResponse>
              </SecondButtonsDivFlex>
            </AlignItemsCenter>
          </Column>
        </AlignItemsCenter>
      </Container>

      <ContainerFluid>
        <FlexContainer>
          <ThirdLeftContainer>
            <ThirdLeftContainerTextArea>
              <Separator />
              <Separator />
              <TextArea title={thirdContainerContent.title} description={thirdContainerContent.description} ></TextArea>
              <Separator />
              <Separator />
            </ThirdLeftContainerTextArea>
          </ThirdLeftContainer>
          <FlexRowContainer>
            <AlignItemsCenter>
              <Column>
                <AlignItemsCenter>
                  <SmallQuestionBox>
                    Quel est l'etymologie du mot "handicap" ?
                  </SmallQuestionBox>
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
        <Column>
          <TextArea title={fourthContainerData.title} description={fourthContainerData.description} />
        </Column>
        <FlexContainer>
          <FlexRowContainer>
            <Column>
              <TextParagraph title={fourthContainerData.title} description={fourthContainerData.loremIpsum}/>
              <TextParagraph title={fourthContainerData.title} description={fourthContainerData.loremIpsum}/>
              <TextParagraph title={fourthContainerData.title} description={fourthContainerData.loremIpsum}/>
              <Separator />
            </Column>
          </FlexRowContainer>
          <FlexRowContainer>
            <AlignItemsCenter>
              <Column>
                <AlignItemsCenter>
                  <SmallQuestionBox>
                    Quel est l'étimologie du mot 'handicap' (Hand in cap)
                  </SmallQuestionBox>
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
    </>
  );
}

export default rules;
