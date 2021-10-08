import styled from "styled-components";
import { ImageHomeComponent } from "../../../common/utils/pictures";
import { Wrapper } from "../../../common/utils/style";
import TextCommonComponent from "../../../common/commonComponents/textCommonComponent";
import { HomeTitle, HomeText, HomeButtonLabel } from "../../../common/utils/text";

const HomeContainer = styled.div`
  text-align: center;
  background-color: white;
  padding: 25px;
  height: auto;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Wrapper>
        <TextCommonComponent
          title={HomeTitle}
          text={HomeText}
          buttonLabel={HomeButtonLabel} 
          href={undefined}/>
        <ImageHomeComponent />
      </Wrapper>
    </HomeContainer>
  );
};

export default Home;
