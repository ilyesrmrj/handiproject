import React from 'react'
import { withRouter } from 'react-router'
import styled from 'styled-components'
import {
  TextDiv,
  Title,
  ButtonDiv,
  TextContain,
  BasicAnchor,
} from '../utils/style'
import { Link } from 'react-router-dom'

const Wrappertext = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  text-align: center;
  padding: 2%;
`

const LinkTo = styled(Link)`
  text-decoration: none;
`

const TextCommonComponent = ({ title, text, buttonLabel, href }) => (
  <Wrappertext>
    <TextDiv>
      <Title>{title}</Title>
      <TextContain>{text}</TextContain>
    </TextDiv>
    {buttonLabel ? (
      <ButtonDiv>
        {href ? (
          <LinkTo to={href}>
            <BasicAnchor>{buttonLabel}</BasicAnchor>
          </LinkTo>
        ) : (
          <BasicAnchor>{buttonLabel}</BasicAnchor>
        )}
      </ButtonDiv>
    ) : (
      <></>
    )}
  </Wrappertext>
)

export default TextCommonComponent
