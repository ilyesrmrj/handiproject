import styled from 'styled-components'
<<<<<<< HEAD
import logo from '../../pictures/internationalLogo.png'
import logoHandi from '../../pictures/logohandi.png'
import instagram from '../../pictures/instagram.png'
import facebook from '../../pictures/facebook.png'
import linkedin from '../../pictures/linkedin.png'
import oms from  '../../pictures/oms.jpg'
import sanitaireSocial from  '../../pictures/sanitaireSocial.jpg'
import fleche from '../../pictures/fleche.png'
=======
import logo from '../../../pictures/internationalLogo.png'
import logoHandi from '../../../pictures/logohandi.png'
import instagram from '../../../pictures/instagram.png'
import facebook from '../../../pictures/facebook.png'
import linkedin from '../../../pictures/linkedin.png'
import oms from  '../../../pictures/oms.jpg'
import sanitaireSocial from  '../../../pictures/sanitaireSocial.jpg'
>>>>>>> aff255f82148eacc1ae1ccca97ec3b2ea4478e61

const ImgStyle = styled.img`
    width: 45%;
`
const OmsPicture = styled.img`
    width: 100%;
    object-fit: cover;
    object-position: 0 70%;
    height: 180px;
`

const LogoStyle = styled.img`
    width: 40%;
`
const ImageFleche = styled.img`
width: 10%;
height: 50%;
`

const SocialMediaLogo = styled.img`
    width: 100%;
`
const SanitaireSocialPicture = styled.img`
    width: 100%;
    object-fit: cover;
    object-position: 0 18%;
    height: 180px;
`
const Fleche = styled.img`
`
export default Fleche
export const Thefleche = () => (<ImageFleche src={fleche} alt='fleche'></ImageFleche>) 
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
    let currentImage = ''
    switch (img) {
        case 'oms':
            image = oms
<<<<<<< HEAD
            constantImage = 'oms'
            break;
        case 'sanitaireSocial':
            image = sanitaireSocial
            constantImage = 'sanitaireSocial'
=======
            currentImage = 'oms'
            break;
        case 'sanitaireSocial':
            image = sanitaireSocial
            currentImage = 'sanitaireSocial'
>>>>>>> aff255f82148eacc1ae1ccca97ec3b2ea4478e61
            break;
        default:
            break;
    }

    return(
<<<<<<< HEAD
<>{ constantImage === oms ? <OmsPicture src={image} alt={image}></OmsPicture> : <SanitaireSocialPicture src={image} alt={image}></SanitaireSocialPicture> }</>
=======
    <>
        { currentImage === 'oms' ?  (<OmsPicture src={image} alt={image}></OmsPicture>) : (<SanitaireSocialPicture src={image} alt={image}></SanitaireSocialPicture>) }
    </>
>>>>>>> aff255f82148eacc1ae1ccca97ec3b2ea4478e61
    )
}
