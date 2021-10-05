import styled from "styled-components"
import Berlin from '../../font/Berlin Sans FB Regular.ttf'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`
export const ButtonApprentice = styled.button`
    border-radius:20px;
    border: 2px solid #858585;
    color: #858585;
    background-color: transparent;
    width: 40%;
    font-size: 18px;
    padding: 10px;
    cursor: pointer;
    &:hover{
        color: #fff;
        background-color: #858585;
    }
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

export const CardStyle = styled.div`
    box-shadow: rgba(233, 78, 26, .2) 0px 4px 12px;
    border-radius: 70px;
    border: 1px solid transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 25px;
    width: 70%;
    transition: all .3s;
    &:hover{
        box-shadow: none;
        border: 1px solid rgba(233, 78, 26, .2);
    }
`

export const TitleSupportCard = styled.h2`
    margin: 25px;
    text-align: center;
    color: gray;
    font-size: 20px;
`

export const ArticleButton = styled.div`
    border-radius: 50px;
    border:1px solid transparent;
    box-shadow: rgba(233, 78, 26, .2) 0px 4px 12px;
    margin: 15px;
    padding: 10px;
    transition: all .3s;
    cursor: pointer;
    &:hover{
        box-shadow: none;
        border: 1px solid rgba(233, 78, 26, .2);
    }
`