import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const ListStyle = styled.ul`
  display: flex;
  flex-direction: row;
  font-size: 20px;
`;
const LiStyle = styled.li`
  list-style: none;
  margin-right: 80px;
  margin-top: 14px;
  cursor: pointer;
`;

const LinkStyle = styled(Link)`
  color: gray;
  text-decoration: none;
  text-transform: uppercase;
  &:hover {
    color: black;
  }
`;

const WrapperList = styled.div`
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
          </LiStyle>
        ))}
      </ListStyle>
    </WrapperList>
  );
};

class MenuLink {
  constructor({ name, uri }) {
    this.name = name;
    this.uri = uri;
  }
}

export default withRouter(LinkList);
