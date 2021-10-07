import logo from '../../../pictures/internationalLogo.png'
import logoHandi from '../../../pictures/logohandi.png'
import oms from  '../../../pictures/oms.jpg'
import sanitaireSocial from  '../../../pictures/sanitaireSocial.jpg'
import fleche from '../../../pictures/fleche.png'
import flechedroite from '../../../pictures/flecheversladroite.png'
import phoneCheck from "../../../pictures/phonecheck.jpeg";
import landScape from '../../../pictures/landScape.jpeg'
import portrait from '../../../pictures/portrait.jpeg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  ImageFlechereverse
} from "./pictures.style";


export const Thefleche = () => (<ImageFleche src={fleche} alt='fleche'></ImageFleche>) 
export const Theflechedroite = () => (<ImageFlechereverse src={flechedroite} alt='fleche'></ImageFlechereverse>) 

export const ImageHomeComponent = () => (
  <ImgStyle src={logo} alt="internaltional"></ImgStyle>
);
export const ImageDiscoverComponent = () => (
  <ImgStyle src={landScape} alt="Landscape"></ImgStyle>
);

export const ImagePlanComponent = () => (
  <ImgPhoneCheck src={phoneCheck} alt="phoneCheck"></ImgPhoneCheck>
);

export const ImageCommitmentComponent = () => (
  <PictureContainer>
    <ImgCommitment src={portrait} alt="portrait"></ImgCommitment>
  </PictureContainer>
);
export const TheFleche = () => (
  <ImageFleche src={fleche} alt="fleche"></ImageFleche>
);
export const ImageComponent = () => (
  <ImgStyle src={logo} alt="internaltional"></ImgStyle>
);
export const LogoHandi = () => (
  <LogoStyle src={logoHandi} alt="logoHandi"></LogoStyle>
);

export const LogoList = (name) => {
  switch (name) {
    case "instagram":
      return (
        <LogoScaleInsta>
          <ToolTip>Instagram</ToolTip>
          <FontAwesomeIcon icon="fa-brands fa-instagram" />
        </LogoScaleInsta>
      );
    case "facebook":
      return (
        <LogoScaleFb>
          <ToolTip>Facebook</ToolTip>
          <FontAwesomeIcon icon="fa-brands fa-facebook-f" />
        </LogoScaleFb>
      );
    case "linkedin":
      return (
        <LogoScaleLink>
          <ToolTip>Linkedin</ToolTip>
          <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
        </LogoScaleLink>
      );
    default:
      break;
  }
};

export const ImageSupport = (img) => {
    let image = ''
    let currentImage = ''
    switch (img) {
        case 'oms':
            image = oms
            currentImage = 'oms'
            break;
        case 'sanitaireSocial':
            image = sanitaireSocial
            currentImage = 'sanitaireSocial'
            break;
        default:
            break;
  }
  return (
    <>
      {currentImage === "oms" ? (
        <OmsPicture src={image} alt={image}></OmsPicture>
      ) : (
        <SanitaireSocialPicture
          src={image}
          alt={image}
        ></SanitaireSocialPicture>
      )}
    </>
  );
}

