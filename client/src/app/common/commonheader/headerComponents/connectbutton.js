import styled from "styled-components"

const ConnectHand = styled.button`
    border-radius: 25px;
    border: 2px solid #2DAAE1;
    padding: 10px;
    margin: 18px 25px;
    height: 45%;
    width: 25%;
    background-color: transparent;
    cursor: pointer;
    &:hover{
        color: #fff;
        background-color: #2DAAE1;
    }
`
const RegisterHand = styled.button`
    border-radius: 25px;
    border: 2px solid #F9B233;
    padding: 10px;
    height: 45%;
    width: 25%;
    margin: 18px 25px;
    background-color: transparent;
    cursor: pointer;
    transition: all .15s;
    &:hover{
        color: #fff;
        background-color: #F9B233;
    }
`
const ConnectWrapper = styled.div`
    width: 25%;
`
const ConnectButton = () => {

    return(
        <ConnectWrapper>
            <ConnectHand>Connexion</ConnectHand>
            <RegisterHand>Inscription</RegisterHand>
        </ConnectWrapper>
    )
}


export default ConnectButton