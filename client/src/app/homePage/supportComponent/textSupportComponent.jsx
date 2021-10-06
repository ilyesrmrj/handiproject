import React from "react";
import styled from "styled-components";
import { TextDiv, Title, TextContain } from "../../common/utils/style";
import { SupportText, SupportTitle } from "../../common/utils/text";
import { LogoList } from "../../common/utils/pictures";

const Wrappertext = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 35%;
  text-align: left;
`;

const ListStyle = styled.ul`
  display: flex;
  flex-direction: row;
  font-size: 20px;
`;
const LiStyle = styled.li`
  list-style: none;
  margin: 0 13px;
  cursor: pointer;
`;

const TextSupportComponent = () => {
  const SocialList = [
    {
      name: "instagram",
    },
    {
      name: "facebook",
    },
    {
      name: "linkedin",
    },
  ];
  return (
    <Wrappertext>
      <TextDiv>
        <Title>{SupportTitle}</Title>
        <TextContain>{SupportText}</TextContain>
      </TextDiv>
      <ListStyle>
        {SocialList.map((social) => (
          <LiStyle key={social.name}>{LogoList(social.name)}</LiStyle>
        ))}
      </ListStyle>
    </Wrappertext>
  );
};

export default TextSupportComponent;
