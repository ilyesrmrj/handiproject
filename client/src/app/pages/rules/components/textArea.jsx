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

/**
 *
 * @param {Object} param0
 * @returns
 */
export const TextArea = ({ props }) => (
  <Wrappertext>
    <TextDiv>
      <Title>{props.title}</Title>
      <TextContain>{props.description}</TextContain>
    </TextDiv>
  </Wrappertext>
);

export const TextAreaWithButton = ({ props }) => (
  <Wrappertext>
    <TextDiv>
      <Title>{props.title}</Title>
      <TextContain>{props.description}</TextContain>
    </TextDiv>
    {props.buttonApprentice ? (
      <ButtonDiv>
        <BasicButton>{props.buttonApprentice}</BasicButton>
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

export const TextParagraph = ({ props }) => (
  <Wrappertext>
    <TextDiv>
      <TextP>{props.description}</TextP>
    </TextDiv>
  </Wrappertext>
);
