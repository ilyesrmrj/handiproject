import React from "react"
import styled from "styled-components"
import { TextDiv, Title, ButtonDiv, ButtonApprentice, TextContain } from "../../common/style"


const Wrappertext = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 35%;
    text-align: center;
`

const TextComponent = () =>  {
    return(
    <Wrappertext>
        <TextDiv>
            <Title>Votre service d'apprentissage suivant votre handicap</Title>
            <TextContain>Handi souhaite proposer une alternative ludique et intuitive à l'apprentissage formel. 
            Notre volonté est de permettre à toutes les personnes en soif de savoir de pouvoir apprendre sans limite tout en progressant face à leur handicap. Nous souhaitons accompagner petits et grands sur le chemin de l’amélioration et ce, à leurs rythmes et sans jugement. 
            </TextContain>
        </TextDiv>
        <ButtonDiv>
            <ButtonApprentice>Commencez l'apprentissage</ButtonApprentice>
        </ButtonDiv>
    </Wrappertext>) 
}

export default TextComponent