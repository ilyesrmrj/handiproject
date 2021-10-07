import styled from "styled-components";

export const ImgStyle = styled.img`
  width: 45%;
  height: 50%;
`;

export const ImgPhoneCheck = styled.img`
  width: 35%;
`;

export const ImgCommitment = styled.img`
  width: 100%;
  height: 50%;
`;

export const OmsPicture = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: 0 70%;
  height: 180px;
`;
export const PictureContainer = styled.div`
  background-color: #def2e6;
  display: flex;
  justify-content: center;
  padding: 5.5% 10%;
`;

export const LogoStyle = styled.img`
  width: 40%;
`;
export const ImageFleche = styled.img`
  width: 10%;
  height: 50%;
`;

export const SocialMediaLogo = styled.img`
  width: 100%;
`;
export const SanitaireSocialPicture = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: 0 18%;
  height: 180px;
`;

export const ToolTip = styled.div`
  position: absolute;
  font-size: 14px;
  background-color: #000;
  color: #ffffff;
  padding: 5px 8px;
  border-radius: 5px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
  opacity: 0;
  pointer-events: none;
  transform: translateY(-100%) translateX(-32%);
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  &::before {
    position: absolute;
    content: "";
    height: 8px;
    width: 8px;
    background-color: #ffffff;
    bottom: -3px;
    left: 50%;
    transform: translate(-50%) rotate(45deg);
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
`;

export const LogoScaleFb = styled.div`
  font-size: 30px;
  border-radius: 20px;
  padding: 15px 25px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  &:hover {
    background-color: #3b5999;
    color: #fff;
    & ${ToolTip} {
      transform: translateY(-180%) translateX(-32%);
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
      background-color: #3b5999;
      color: #ffffff;
    }
    & ${ToolTip}::before {
      background-color: #3b5999;
    }
  }
`;
export const LogoScaleLink = styled.div`
  font-size: 30px;
  border-radius: 20px;
  padding: 15px 25px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  &:hover {
    background-color: #0e76a8;
    color: #fff;
    & ${ToolTip} {
      transform: translateY(-180%) translateX(-32%);
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
      background-color: #0e76a8;
      color: #ffffff;
    }
    & ${ToolTip}::before {
      background-color: #0e76a8;
    }
  }
`;
export const LogoScaleInsta = styled.div`
  font-size: 30px;
  border-radius: 20px;
  padding: 15px 25px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  &:hover {
    background-color: #e1306c;
    color: #fff;
    & ${ToolTip} {
      transform: translateY(-180%) translateX(-32%);
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
      background-color: #e1306c;
      color: #ffffff;
    }
    & ${ToolTip}::before {
      background-color: #e1306c;
    }
  }
`;

export const ImageFlechereverse = styled.img`
width: 7%;
height: 30%;
`;