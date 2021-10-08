import styled from 'styled-components'

type Props = {
  error?: boolean
  displayed?: boolean
  isInputInvalid?: boolean
  cancel?: boolean
}

export const InputFormStyle = styled.input`
  padding: 0.5em;
  margin: 1em 0;
`

export const LabelStyled = styled.span`
  position: absolute;
  left: 25px;
  top: -29px;
  padding: 5px;
  background-color: white;
  white-space: nowrap;
  font-weight: normal;
  font-size: 14px;
  line-height: 1;
  letter-spacing: 0;
  z-index: 1;
  color: grey;
  border-radius: 5px;
  transition: all 0.2s;
  & span {
    color: red;
  }
`

export const InputStyled = styled.input<Props>`
  margin: 0.5em;
  padding: 0.5em;
  width: 500px;
  outline: none;
  border-radius: 15px;
  border: 1px solid ${({ error }) => (error ? 'red' : 'grey')};
  transition: ${({ error }) => (error ? '0' : 'all 0.2s')};
  font-size: 14px;
  color: ${({ error }) => (error ? '#991B1B' : 'black')};
  ${({ disabled, error }) =>
    disabled
      ? `:disabled{
    opacity: 0.5;
  }`
      : `:hover {
    border: 1px solid ${error ? 'red' : 'black'};
  }`};
  &:focus {
    border: 1px solid ${({ error }) => (error ? '#DC2626' : 'blue')};
    color: ${({ error }) => (error ? '#991B1B' : 'blue')};
    & ~ ${LabelStyled} {
      transform: translate(0, 0%) scale(1);
    }
  }
`

export const InputLabel = styled.label`
  position: relative;
`

export const InputDiv = styled.div`
  width: 50%;
`

export const ErrorMessage = styled.span<Props>`
  color: red;
  position: absolute;
  bottom: -20px;
  left: 4px;
  padding: 2px 15px;
  border-radius: 5px;
  opacity: ${({ error }) => (error ? '1' : '0')};
  font-size: 12px;
  transition: all 0.1s;
  transform: ${({ error }) => (error ? 'translateY(100%)' : 'translateY(0%)')};
`
