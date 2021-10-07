import styled from "styled-components";
import { Link } from "react-router-dom";

export const DropDown = styled.div`
  background-color: rgb(255, 255, 255);
  width: 10%;
  border-radius: 5px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  position: absolute;
  top: 100%;
  left: 8.5%;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
  cursor: initial;
  &:hover {
    visibility: visible;
    opacity: 1;
    transform: translateY(-23%);
  }
`;
export const LinkStyleTo = styled(Link)`
  color: gray;
  text-decoration: none;
  text-transform: uppercase;
  &:hover {
    color: black;
  }
`;

const DropDownUl = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  padding: 15px;
`;

const DropDownList = styled.li`
  list-style: none;
  font-size: 14px;
  margin: 10px 0;
`;

const LinkStyleDropDown = styled.label`
  color: gray;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    color: black;
  }
`;

const DropDownComponent = () => (
  <DropDown>
    <DropDownUl>
      <DropDownList>
        <LinkStyleTo to="/les-differents-troubles-de-dys">
          <LinkStyleDropDown>Les différents troubles de Dys</LinkStyleDropDown>
        </LinkStyleTo>
      </DropDownList>
      <DropDownList>
        <LinkStyleTo to="/les-cours">
          <LinkStyleDropDown>Les cours</LinkStyleDropDown>
        </LinkStyleTo>
      </DropDownList>
      <DropDownList>
        <LinkStyleTo to="/discover">
          <LinkStyleDropDown>Qui sommes nous ?</LinkStyleDropDown>
        </LinkStyleTo>
      </DropDownList>
    </DropDownUl>
  </DropDown>
);

export default DropDownComponent;
