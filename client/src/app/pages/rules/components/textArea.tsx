import React from "react";
import styled from "styled-components";
import {
  BasicButton,
  ButtonDiv,
  TextContain,
  TextDiv,
  Title,
} from "../../../common/utils/style";

const Wrappertext = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  text-align: center;
`;

type PropsType = {
  title: string;
  description: string;
};

export const TextArea = ({ title, description }: PropsType) => (
  <Wrappertext>
    <TextDiv>
      <Title>{title}</Title>
      <TextContain>{description}</TextContain>
    </TextDiv>
  </Wrappertext>
);

type TextAreaPropsTypes = {
  title: String,
  description: String,
  buttonApprentice: String
}

export const TextAreaWithButton = ({ title, description,buttonApprentice }: TextAreaPropsTypes) => (
  <Wrappertext>
    <TextDiv>
      <Title>{title}</Title>
      <TextContain>{description}</TextContain>
    </TextDiv>
    {buttonApprentice ? (
      <ButtonDiv>
        <BasicButton>{buttonApprentice}</BasicButton>
      </ButtonDiv>
    ) : (
      <></>
    )}
  </Wrappertext>
);

const TextP = styled.p`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 18px;
  font-weight: lighter;
  line-height: 1.5;
  color: #858585;
`;
type TextParagraphPropsTypes = {
  title: String
  description: String
}
export const TextParagraph = ({ title,description }: TextParagraphPropsTypes) => (
  <Wrappertext>
    <TextDiv>
      <TextP>{description}</TextP>
    </TextDiv>
  </Wrappertext>
);
