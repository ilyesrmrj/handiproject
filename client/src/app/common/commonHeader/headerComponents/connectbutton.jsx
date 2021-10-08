import styled from 'styled-components'
import { LinkStyleTo } from './dropDown'

const ConnectHand = styled.button`
  border-radius: 10px;
  border: 2px solid transparent;
  color: #2daae1;
  padding: 10px;
  margin-right: 25px;
  height: 45%;
  width: 25%;
  background-color: transparent;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  }
`
const RegisterHand = styled.button`
  border-radius: 10px;
  border: 2px solid transparent;
  color: #f9b233;
  padding: 10px;
  height: 45%;
  width: 25%;
  margin-left: 25px;
  background-color: transparent;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
  }
`
const ConnectWrapper = styled.div`
  width: 25%;
`
const ConnectButton = () => {
  return (
    <ConnectWrapper>
      <ConnectHand>Connexion</ConnectHand>
      <LinkStyleTo to="/register">
        <RegisterHand>Inscription</RegisterHand>
      </LinkStyleTo>
    </ConnectWrapper>
  )
}

export default ConnectButton
