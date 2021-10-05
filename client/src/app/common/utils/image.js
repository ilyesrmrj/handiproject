import styled from 'styled-components'
import logo from '../../pictures/internationalLogo.png'
import logoHandi from '../../pictures/logohandi.png'
import instagram from '../../pictures/instagram.png'
import facebook from '../../pictures/facebook.png'
import linkedin from '../../pictures/linkedin.png'
import oms from  '../../pictures/oms.jpg'
import sanitaireSocial from  '../../pictures/sanitaireSocial.jpg'

const ImgStyle = styled.img`
    width: 50%;
`
const OmsPicture = styled.img`
    width: 100%;
    object-fit: cover;
    object-position: 0 70%;
    height: 180px;
`

const LogoStyle = styled.img`
    width: 10%;
`
const SocialMediaLogo = styled.img`
    width: 100%;
`
const SanitaireSocialPicture = styled.img`
    width: 100%;
    object-fit: cover;
    object-position: 0 0%;
    height: 180px;
`


export const ImageComponent = () => (<ImgStyle src={logo} alt='internaltional'></ImgStyle>)
export const LogoHandi = () => (<LogoStyle src={logoHandi} alt='logoHandi'></LogoStyle>)
export const LogoList = (name) => {
    let logoChoice = ''
    switch (name) {
        case "instagram":
            logoChoice = instagram
            break;
        case "facebook":
            logoChoice = facebook
            break;
        case "linkedin":
            logoChoice = linkedin
            break;
        default:
            break;
    }
    return(
        <SocialMediaLogo src={logoChoice} alt='logoHandi'></SocialMediaLogo>
    )
}

export const ImageSupport = (img) => {
    let image = ''
    let constantImage = ''
    switch (img) {
        case 'oms':
            image = oms
            constantImage = OmsPicture
            break;
        case 'sanitaireSocial':
            image = sanitaireSocial
            constantImage = SanitaireSocialPicture
            break;
        default:
            break;
    }

    return(
        <constantImage src={image} alt={image}></constantImage>
    )
} 