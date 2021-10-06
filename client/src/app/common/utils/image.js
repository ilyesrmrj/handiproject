import styled from "styled-components";
import logo from "../../../pictures/internationalLogo.png";
import logoHandi from "../../../pictures/logohandi.png";
import instagram from "../../../pictures/instagram.png";
import facebook from "../../../pictures/facebook.png";
import linkedin from "../../../pictures/linkedin.png";
import oms from "../../../pictures/oms.jpg";
import sanitaireSocial from "../../../pictures/sanitaireSocial.jpg";
import fleche from "../../../pictures/fleche.png";
import landScape from "../../../pictures/landScape.jpeg";
import portrait from "../../../pictures/portrait.jpeg";

const ImgStyle = styled.img`
  width: 45%;
  height: 50%;
`;

const ImgCommitment = styled.img`
  width: 100%;
  height: 50%;
`;

const OmsPicture = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: 0 70%;
  height: 180px;
`;
const PictureContainer = styled.div`
  background-color: #def2e6;
  display: flex;
  justify-content: center;
  padding: 7%;
`;

const LogoStyle = styled.img`
  width: 40%;
`;
const ImageFleche = styled.img`
  width: 10%;
  height: 50%;
`;

const SocialMediaLogo = styled.img`
  width: 100%;
`;
const SanitaireSocialPicture = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: 0 18%;
  height: 180px;
`;

export const ImageHomeComponent = () => (
  <ImgStyle src={logo} alt="internaltional"></ImgStyle>
);
export const ImageDiscoverComponent = () => (
  <ImgStyle src={landScape} alt="Landscape"></ImgStyle>
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
  let logoChoice = "";
  switch (name) {
    case "instagram":
      logoChoice = instagram;
      break;
    case "facebook":
      logoChoice = facebook;
      break;
    case "linkedin":
      logoChoice = linkedin;
      break;
    default:
      break;
  }
  return <SocialMediaLogo src={logoChoice} alt="logoHandi"></SocialMediaLogo>;
};

export const ImageSupport = (img) => {
  let image = "";
  let currentImage = "";
  switch (img) {
    case "oms":
      image = oms;
      currentImage = "oms";
      break;
    case "sanitaireSocial":
      image = sanitaireSocial;
      currentImage = "sanitaireSocial";
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
};
