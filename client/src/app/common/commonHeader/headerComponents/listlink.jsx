import styled from "styled-components";

import { withRouter } from "react-router-dom";
import { NavigationList } from "../../utils/text";
import DropDownComponent, { DropDown, LinkStyleTo } from "./dropDown";

const ListStyle = styled.ul`
  display: flex;
  flex-direction: row;
  font-size: 20px;
`;
const LiStyle = styled.li`
  list-style: none;
  margin-right: 80px;
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
  }
`;

const WrapperList = styled.div`
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
          </LiStyle>
        ))}
      </ListStyle>
    </WrapperList>
  );
};

export default withRouter(LinkList);
