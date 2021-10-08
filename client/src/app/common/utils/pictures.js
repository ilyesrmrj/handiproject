import logo from '../../../pictures/internationalLogo.png'
import logoHandi from '../../../pictures/logohandi.png'
import oms from '../../../pictures/oms.jpg'
import sanitaireSocial from '../../../pictures/sanitaireSocial.jpg'
import fleche from '../../../pictures/fleche.png'
import flechedroite from '../../../pictures/flecheversladroite.png'
import phoneCheck from '../../../pictures/phonecheck.jpeg'
import landScape from '../../../pictures/landScape.jpeg'
import portrait from '../../../pictures/portrait.jpeg'
import apprendre from '../../../pictures/apprendre.jpg'
import bg from '../../../pictures/bg.jpg'
import concentrer from '../../../pictures/concentrer.jpg'
import coupeafro from '../../../pictures/coupeafro.jpg'
import courir from '../../../pictures/courir.jpg'
import diagramme from '../../../pictures/diagramme.png'
import dors from '../../../pictures/dors.jpg'
import enfant from '../../../pictures/enfant.jpg'
import entretient from '../../../pictures/entretient.jpg'
import fauteuil from '../../../pictures/fauteuil.jpg'
import fauteuil2 from '../../../pictures/fauteuil2.jpg'
import main from '../../../pictures/main.jpg'
import maylis from '../../../pictures/maylis.jpg'
import oceanne from '../../../pictures/oceanne.jpg'
import papeterie from '../../../pictures/papeterie.jpg'
import persobleu from '../../../pictures/persobleu.png'
import persoviolet from '../../../pictures/persoviolet.png'
import quentin from '../../../pictures/quentin.jpg'
import retardataire from '../../../pictures/retardataire.jpg'
import reunion from '../../../pictures/reunion.png'
import robebleu from '../../../pictures/robebleu.jpg'
import sacbleu from '../../../pictures/sacbleu.png'
import scrabble from '../../../pictures/scrabble.jpg'
import tel_bleu from '../../../pictures/tel_bleu.png'
import yliass from '../../../pictures/yliass.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  ImgStyle,
  ImageFleche,
  ImgCommitment,
  LogoStyle,
  OmsPicture,
  PictureContainer,
  SanitaireSocialPicture,
  ImgPhoneCheck,
  LogoScaleFb,
  LogoScaleLink,
  LogoScaleInsta,
  ToolTip,
  ImageFlechereverse,
  ImgTeam,
  ImgStyleHome,
} from './pictures.style'

export const Thefleche = () => (
  <ImageFleche src={fleche} alt="fleche"></ImageFleche>
)
export const Theflechedroite = () => (
  <ImageFlechereverse src={flechedroite} alt="fleche"></ImageFlechereverse>
)

export const ImageHomeComponent = () => (
  <ImgStyleHome src={logo} alt="internaltional"></ImgStyleHome>
)
export const ImageDiscoverComponent = () => (
  <ImgStyle src={landScape} alt="Landscape"></ImgStyle>
)

export const ImagePlanComponent = () => (
  <ImgPhoneCheck src={tel_bleu} alt="phoneCheck"></ImgPhoneCheck>
)

export const ImageCommitmentComponent = () => (
  <PictureContainer>
    <ImgCommitment src={robebleu} alt="portrait"></ImgCommitment>
  </PictureContainer>
)
export const TheFleche = () => (
  <ImageFleche src={fleche} alt="fleche"></ImageFleche>
)
export const ImageComponent = () => (
  <ImgStyle src={logo} alt="internaltional"></ImgStyle>
)
export const LogoHandi = () => (
  <LogoStyle src={logoHandi} alt="logoHandi"></LogoStyle>
)

export const LogoList = (name) => {
  switch (name) {
    case 'instagram':
      return (
        <LogoScaleInsta>
          <ToolTip>Instagram</ToolTip>
          <FontAwesomeIcon icon="fa-brands fa-instagram" />
        </LogoScaleInsta>
      )
    case 'facebook':
      return (
        <LogoScaleFb>
          <ToolTip>Facebook</ToolTip>
          <FontAwesomeIcon icon="fa-brands fa-facebook" />
        </LogoScaleFb>
      )
    case 'linkedin':
      return (
        <LogoScaleLink>
          <ToolTip>Linkedin</ToolTip>
          <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
        </LogoScaleLink>
      )
    default:
      break
  }
}

export const ImgTeamList = (name) => {
  switch (name) {
    case 'Quentin':
      return <ImgTeam src={quentin} alt={quentin}></ImgTeam>
    case 'Marius':
      return <ImgTeam src={bg} alt={bg}></ImgTeam>
    case 'Maylis':
      return <ImgTeam src={maylis} alt={maylis}></ImgTeam>
    case 'Oceane':
      return <ImgTeam src={oceanne} alt={oceanne}></ImgTeam>
    case 'Ilyess':
      return <ImgTeam src={yliass} alt={yliass}></ImgTeam>
    case 'Abdellah':
      return <ImgTeam src={retardataire} alt={retardataire}></ImgTeam>
    default:
      break
  }
}

export const ImageSupport = (img) => {
  let image = ''
  let currentImage = ''
  switch (img) {
    case 'oms':
      image = oms
      currentImage = 'oms'
      break
    case 'sanitaireSocial':
      image = sanitaireSocial
      currentImage = 'sanitaireSocial'
      break
    default:
      break
  }
  return (
    <>
      {currentImage === 'oms' ? (
        <OmsPicture src={image} alt={image}></OmsPicture>
      ) : (
        <SanitaireSocialPicture
          src={image}
          alt={image}
        ></SanitaireSocialPicture>
      )}
    </>
  )
}
