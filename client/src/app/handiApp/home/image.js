import styled from 'styled-components'
import logo from '../../pictures/internationalLogo.png'
import logoHandi from '../../pictures/logohandi.png'

const ImgStyle = styled.img`
    width: 50%;
`
const LogoStyle = styled.img`
    width: 15%;
`
export const ImageComponent = () => (<ImgStyle src={logo} alt='internaltional'></ImgStyle>)
export const LogoHandi = () => (<LogoStyle src={logoHandi} alt='logoHandi'></LogoStyle>)
