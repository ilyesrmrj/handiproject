import React from "react";
import styled from "styled-components";
import {
  TextDiv,
  Title,
  ButtonDiv,
  BasicButton,
  TextContain,
} from "../utils/style";

const Wrappertext = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  text-align: center;
  padding: 2%;
`;

const TextCommonComponent = ({ title, text, buttonLabel }) => (
  <Wrappertext>
    <TextDiv>
      <Title>{title}</Title>
      <TextContain>{text}</TextContain>
    </TextDiv>
    {buttonLabel ? (
      <ButtonDiv>
        <BasicButton>{buttonLabel}</BasicButton>
      </ButtonDiv>
    ) : (
      <></>
    )}
  </Wrappertext>
);

export default TextCommonComponent;
