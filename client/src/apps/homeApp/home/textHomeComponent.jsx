import React from "react"
import styled from "styled-components"
import { TextDiv, Title, ButtonDiv, ButtonApprentice, TextContain } from "../../common/utils/style"
import { HomeText, HomeTitle } from "../../common/utils/text"


const Wrappertext = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 35%;
    text-align: center;
`

const TextHomeComponent = () =>  (
    <Wrappertext>
        <TextDiv>
            <Title>{HomeTitle}</Title>
            <TextContain>{HomeText}</TextContain>
        </TextDiv>
        <ButtonDiv>
            <ButtonApprentice>Commencez l'apprentissage</ButtonApprentice>
        </ButtonDiv>
    </Wrappertext>
) 


export default TextHomeComponent