import styled from "styled-components"
import { LogoHandi } from "../../handiApp/home/image"
import LinkList from "./headerComponents/listlink"
import ConnectButton from "./headerComponents/connectbutton"

const CommonHeaderStyled = styled.div`
    text-align:center ;
    background-color: rgb(255,255,255);
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const CommonHeader = () => {

    return(
        <CommonHeaderStyled >
            <LinkList/>
            <LogoHandi/>
            <ConnectButton/>
        </CommonHeaderStyled>
    )
}

export default CommonHeader