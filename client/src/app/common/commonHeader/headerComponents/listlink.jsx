import styled from "styled-components";
<<<<<<< HEAD
import { Link, withRouter } from "react-router-dom";
import Route from "../../../Route";
import HomePage from "../../../homePage/homePage";
=======
import { withRouter } from "react-router-dom";
import { NavigationList } from "../../utils/text";
import DropDownComponent, { DropDown, LinkStyleTo } from "./dropDown";
>>>>>>> master

const ListStyle = styled.ul`
  display: flex;
  flex-direction: row;
  font-size: 20px;
`;
const LiStyle = styled.li`
  list-style: none;
  margin-right: 80px;
<<<<<<< HEAD
  margin-top: 14px;
  cursor: pointer;
`;

const LinkStyle = styled(Link)`
  color: gray;
  text-decoration: none;
  text-transform: uppercase;
  &:hover {
    color: black;
=======
  cursor: pointer;
`;

const LinkStyle = styled.label`
  color: gray;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 20px;
  &:hover {
    color: black;
    & ~ ${DropDown} {
      visibility: visible;
      transform: translateY(-23%);
      opacity: 1;
    }
>>>>>>> master
  }
`;

const WrapperList = styled.div`
<<<<<<< HEAD
  width: 20%;
`;
const LinkList = () => {
  let List = ["accueil", "découvrir+", "règles", "Les troubles", "tarifs"];

  const urls = [
    new MenuLink({
      name: "accueil",
      uri: "/",
      
    }),
    new MenuLink({
      name: "découvrir+",
      uri: "/decouvrir",
    }),
    new MenuLink({
      name: "règles",
      uri: "/regles",
    }),
    new MenuLink({
      name: "Les troubles",
      uri: "/les-troubles-de-dys",
    }),
    new MenuLink({
      name: "tarifs",
      uri: "/tarifs",
    }),
  ];

  return (
    <WrapperList>
      <ListStyle>
        {urls.map((menuLink) => (
          <LiStyle key={menuLink.name}>
            <LinkStyle to={menuLink.uri}>{menuLink.name}</LinkStyle>
=======
  width: 25%;
`;

const ConditionalLink = ({ name, goTo, condition }) => {
  return (
    <>
      {condition ? (
        <LinkStyleTo to={goTo}>{name}</LinkStyleTo>
      ) : (
        <>
          <LinkStyle htmlFor="test">{name}</LinkStyle>
          <DropDownComponent />
        </>
      )}
    </>
  );
};

const LinkList = () => {
  return (
    <WrapperList>
      <ListStyle>
        {NavigationList.map((link) => (
          <LiStyle key={link.name}>
            <ConditionalLink
              goTo={link.path}
              condition={link.path !== "about"}
              name={link.name}
            ></ConditionalLink>
>>>>>>> master
          </LiStyle>
        ))}
      </ListStyle>
    </WrapperList>
  );
};
<<<<<<< HEAD

class MenuLink {
  constructor({ name, uri }) {
    this.name = name;
    this.uri = uri;
  }
}
=======
>>>>>>> master

export default withRouter(LinkList);
