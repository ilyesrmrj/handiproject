import { ImgTeamList } from "../../../common/utils/pictures";
import { HandiTeamTitle, TeamList } from "../../../common/utils/text";
import {
  HandiTeamTitleStyled,
  HandiTeamWrapper,
  TeamListStyle,
  ImgDiv,
  MemberFirstname,
  MemberJob,
  MemberLastname,
  TeamListUl,
} from "../discover.style";

const HandiTeamComponent = () => {
  return (
    <HandiTeamWrapper>
      <HandiTeamTitleStyled>{HandiTeamTitle}</HandiTeamTitleStyled>
      <TeamListUl>
        {TeamList.map((member) => (
          <TeamListStyle key={member.firstname}>
            {ImgTeamList(member.firstname)}
            <MemberFirstname>{member.firstname}</MemberFirstname>
            <MemberLastname>{member.lastname}</MemberLastname>
            <MemberJob>{member.job}</MemberJob>
          </TeamListStyle>
        ))}
      </TeamListUl>
    </HandiTeamWrapper>
  );
};

export default HandiTeamComponent;
