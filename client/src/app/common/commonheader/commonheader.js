import styled from "styled-components"
import { LogoHandi } from "../../handiApp/home/image"
import LinkList from "./headerComponents/listlink"
import ConnectButton from "./headerComponents/connectbutton"

const CommonHeaderStyled = styled.div`
    text-align:center ;
    background-color: rgb(255,255,255,0.9);
    backdrop-filter: blur(15px);
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: -webkit-sticky;
    position: sticky;
    top: 0px;
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