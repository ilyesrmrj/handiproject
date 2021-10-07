import styled from "styled-components";
import { SmallQuestionBox } from "../../common/utils/style";
import { LorepIpsum } from "../../common/utils/text";
import {
  FirstResponse,
  SecondResponse,
  ThirdResponse,
} from "../../homePage/handiApprentissage/handiApprentissage";
import { AlignItemsCenter } from "../rules/components/grid";
import { TextParagraph } from "../rules/components/textArea";
import { QuestionButtons } from "../rules/rules";
import { QuestionData } from "./courses";

const FlexContainer = styled.div`
  position: relative;
  display: flex;

  align-items: center;
  min-height: inherit;
  height: inherit;
`;

const SquareContent = styled.div`
  position: relative;

  width: 45%;
  padding: 2.5rem;
  margin: auto;
`;

const questionProps = {
  description: LorepIpsum, // a remplacer avec le texte de l'exercice
  question: "Le mot souligné est t'il bien orthographié ?",
};

const Counter = styled.div`
  position: absolute;
  bottom: 50px;
  right: 50px;
  font-size: 25px;
`;

const MultiButtonsDivFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 2.5rem;
  padding: 1rem;
  width: 100%;
`;

export default function Cours() {
  return (
    <>
      <FlexContainer>
        <SquareContent>
          <QuestionData
            question="Le courriel ou mail est devenu aujourd'hui l'écrit le plus fréquent en entreprise. L'envoie de courriel va permettre ......"
            Answers={() => (
              <>
                <FirstResponse>d'informer</FirstResponse>
                <SecondResponse>d'informée</SecondResponse>
                <ThirdResponse>d'informé</ThirdResponse>
              </>
            )}
          />
        </SquareContent>
        <Counter>1/4</Counter>
      </FlexContainer>

      <FlexContainer>
        <SquareContent>
          <TextParagraph props={questionProps}></TextParagraph>
        </SquareContent>
        <SquareContent>
          <QuestionData
            question="Le courriel ou mail est devenu aujourd'hui l'écrit le plus fréquent en entreprise. L'envoie de courriel va permettre ......"
            Answers={() => (
              <>
                <FirstResponse>d'informer</FirstResponse>
                <SecondResponse>d'informée</SecondResponse>
                <ThirdResponse>d'informé</ThirdResponse>
              </>
            )}
          />
        </SquareContent>
        <Counter>2/4</Counter>
      </FlexContainer>
      <FlexContainer>
        <SquareContent>
          <QuestionData
            question="Le courriel ou mail est devenu aujourd'hui l'écrit le plus fréquent en entreprise. L'envoie de courriel va permettre ......"
            Answers={() => (
              <>
                <AlignItemsCenter>
                  <MultiButtonsDivFlex>
                    <FirstResponse>d'informer</FirstResponse>
                    <SecondResponse>d'informée</SecondResponse>
                    <ThirdResponse>d'informé</ThirdResponse>
                  </MultiButtonsDivFlex>
                </AlignItemsCenter>
                <AlignItemsCenter>
                  <MultiButtonsDivFlex>
                    <FirstResponse>d'informer</FirstResponse>
                    <SecondResponse>d'informée</SecondResponse>
                    <ThirdResponse>d'informé</ThirdResponse>
                  </MultiButtonsDivFlex>
                </AlignItemsCenter>
                <AlignItemsCenter>
                  <MultiButtonsDivFlex>
                    <FirstResponse>d'informer</FirstResponse>
                    <SecondResponse>d'informée</SecondResponse>
                    <ThirdResponse>d'informé</ThirdResponse>
                  </MultiButtonsDivFlex>
                </AlignItemsCenter>
              </>
            )}
          />
        </SquareContent>
        <Counter>3/4</Counter>
      </FlexContainer>
      <FlexContainer>
        <SquareContent>
          <TextParagraph props={questionProps}></TextParagraph>
        </SquareContent>
        <SquareContent>
          <QuestionData
            question="Le courriel ou mail est devenu aujourd'hui l'écrit le plus fréquent en entreprise. L'envoie de courriel va permettre ......"
            Answers={() => (
              <>
                <FirstResponse>d'informer</FirstResponse>
                <SecondResponse>d'informée</SecondResponse>
                <ThirdResponse>d'informé</ThirdResponse>
              </>
            )}
          />
        </SquareContent>
        <Counter>4/4</Counter>
      </FlexContainer>
    </>
  );
}
