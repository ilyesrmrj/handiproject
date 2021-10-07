import styled from "styled-components";
import { LogoHandi } from "../utils/pictures";
import LinkList from "./headerComponents/listlink";
import ConnectButton from "./headerComponents/connectbutton";

const CommonHeaderStyled = styled.section`
    text-align:center ;
    background-color: rgb(255,255,255);
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
    align-items: center;
    position: -webkit-sticky;
    position: sticky;
    top: 0px;
    z-index:100;
    height: 5vh;
`

const LogoContainer = styled.div`
  margin-top: 10px;
  width: 25%;
`;

const CommonHeader = () => {
  return (
    <CommonHeaderStyled>
      <LinkList />
      <LogoContainer>
        <LogoHandi />
      </LogoContainer>
      <ConnectButton />
    </CommonHeaderStyled>
  );
};

export default CommonHeader;
