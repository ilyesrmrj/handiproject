import React from "react"
import styled from "styled-components"
import { TextDiv, Title, ButtonDiv, ButtonApprentice, TextContain } from "../utils/style"



const Wrappertext = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 35%;
    text-align: center;
`

const TextCommonComponent = ({title, text, buttonLabel}) =>  (
    <Wrappertext>
        <TextDiv>
            <Title>{title}</Title>
            <TextContain>{text}</TextContain>
        </TextDiv>
        <ButtonDiv>
            <ButtonApprentice>{buttonLabel}</ButtonApprentice>
        </ButtonDiv>
    </Wrappertext>
) 


export default TextCommonComponent