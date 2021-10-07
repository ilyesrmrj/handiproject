import { SmallQuestionBox } from "../../common/utils/style";
import {
  FirstResponse,
  SecondResponse,
} from "../../homePage/handiApprentissage/handiApprentissage";
import { AlignItemsCenter, FlexContainer } from "../rules/components/grid";
import { QuestionButtons } from "../rules/rules";

export const QuestionData = ({
    question,
    Answers
}) => (
  <AlignItemsCenter>
    <SmallQuestionBox>
      {question}
    </SmallQuestionBox>
    <QuestionButtons>
      <Answers />
    </QuestionButtons>
  </AlignItemsCenter>
);

export const QuestionTwo = () => (
  <>
    <FlexContainer>
      <SmallQuestionBox>Question 2</SmallQuestionBox>
      <QuestionButtons>
        <FirstResponse>Oui</FirstResponse>
        <SecondResponse>Non</SecondResponse>
      </QuestionButtons>
    </FlexContainer>
  </>
);
