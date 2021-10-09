import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BasicButton, CardStyle, Title, Wrapper } from '../../../../common/utils/style'
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome'

export const CardPrice = styled(CardStyle)`
  width: 20%;
  height: 100%;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`

export const WrapperPrice = styled(Wrapper)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 10vh;
`

export const CardContain = styled.div`
  font-size: 20px;
  margin: 1.5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ButtonPrice = styled(BasicButton)`
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  border-radius: 20px;
  background-color: #2cabe1;
  border: 1px solid transparent;
  color: #fff;
  &:hover {
    color: #2cabe1;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }
`

export const TitlePrice = styled(Title)`
  margin-bottom: 0.5em;
  color: #f9b232;
`

export const FontIconCheck = styled(FontAwesomeIcon)<FontAwesomeIconProps>`
  color: #00ff00;
  font-size: 30px;
`
export const FontIconCross = styled(FontAwesomeIcon)<FontAwesomeIconProps>`
  color: #ff0000;
  font-size: 30px;
`
