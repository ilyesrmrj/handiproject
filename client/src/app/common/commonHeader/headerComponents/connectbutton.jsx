import styled from "styled-components";

const ConnectHand = styled.button`
  border-radius: 25px;
  border: 2px solid #2daae1;
  padding: 10px;
  margin-right: 25px;
  height: 45%;
  width: 25%;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.15s;
  &:hover {
    color: #fff;
    background-color: #2daae1;
  }
`;
const RegisterHand = styled.button`
  border-radius: 25px;
  border: 2px solid #f9b233;
  padding: 10px;
  height: 45%;
  width: 25%;
  margin-left: 25px;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.15s;
  &:hover {
    color: #fff;
    background-color: #f9b233;
  }
`;
const ConnectWrapper = styled.div`
  width: 25%;
`;
const ConnectButton = () => {
  return (
    <ConnectWrapper>
      <ConnectHand>Connexion</ConnectHand>
      <RegisterHand>Inscription</RegisterHand>
    </ConnectWrapper>
  );
};

export default ConnectButton;
