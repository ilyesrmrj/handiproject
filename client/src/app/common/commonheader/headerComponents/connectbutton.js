import styled from "styled-components"

const ConnectHand = styled.button`
    border-radius: 25px;
    border: 2px solid #2DAAE1;
    padding: 10px;
    margin: 15px 25px;
    height: 50%;
    width: 25%;
    background-color: transparent;
`
const RegisterHand = styled.button`
    border-radius: 25px;
    border: 2px solid #F9B233;
    padding: 10px;
    height: 25%;
    width: 25%;
    margin: 15px 25px;
    background-color: transparent;
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