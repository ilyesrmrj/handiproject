import styled from "styled-components";
import Berlin from "../../../font/Berlin Sans FB Regular.ttf";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;
export const BasicButton = styled.button`
  border-radius: 10px;
  border: 2.5px solid rgba(255, 255, 255);
  background-color: rgba(255, 255, 255);
  width: auto;
  font-size: 18px;
  padding: 10px 5%;
  cursor: pointer;
  transition: all 0.3s;
  color: #000;
  box-shadow: 0 2px 8px -1px rgba(0, 0, 0, 0.15);
  &:hover {
    box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.2);
  }
`;
export const ButtonDiv = styled.div`
  width: 100%;
  text-align: right;
`;

export const TextDiv = styled.div`
  width: 100%;
  text-align: left;
`;

export const Title = styled.h1`
  @font-face {
    font-family: "Berlin Sans FB";
    src: url(${Berlin}) format("ttf");
  }
  margin-bottom: 50px;
  font-size: 45px;
  color: #000;
`;

export const TextContain = styled.p`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 18px;
  font-weight: lighter;
  line-height: 1.5;
  color: #858585;
  margin: 50px 0;
`;

export const CardStyle = styled.div`
  box-shadow: rgba(233, 78, 26, 0.2) 0px 4px 12px;
  border-radius: 70px;
  border: 1px solid transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 25px;
  width: 70%;
  transition: all 0.3s;
  &:hover {
    box-shadow: none;
    border: 1px solid rgba(233, 78, 26, 0.2);
  }
`;

export const TitleSupportCard = styled.h2`
  margin: 25px;
  text-align: center;
  color: gray;
  font-size: 20px;
`;

export const ArticleButton = styled.div`
  border-radius: 50px;
  border: 1px solid transparent;
  box-shadow: rgba(233, 78, 26, 0.2) 0px 4px 12px;
  margin: 15px;
  padding: 10px;
  transition: all 0.3s;
  cursor: pointer;
  &:hover {
    box-shadow: none;
    border: 1px solid rgba(233, 78, 26, 0.2);
  }
`;
