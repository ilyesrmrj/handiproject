import styled from "styled-components"
import Berlin from '../font/Berlin Sans FB Regular.ttf'

export const ButtonApprentice = styled.button`
    border-radius:20px;
    border: 2px solid #858585;
    color: #858585;
    background-color: transparent;
    width: 40%;
    font-size: 18px;
    padding: 10px;
    cursor: pointer;
`
export const ButtonDiv = styled.div`
    width: 100%;
    text-align: right;
`

export const TextDiv = styled.div`
    width: 100%;
    text-align: left;
`

export const Title = styled.h1`
    @font-face {
    font-family: 'Berlin Sans FB';
    src: url(${Berlin}) format('ttf');
    } 
    margin-bottom: 50px;
    font-size: 45px;    
    color: #000;
`

export const TextContain = styled.p`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 18px;
    font-weight: lighter;
    line-height: 1.5;
    color: #858585;
    margin: 50px 0;
`