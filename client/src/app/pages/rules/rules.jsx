import styled from "styled-components";
import { Wrapper } from "../../common/utils/style";

const Container = styled.div`
  text-align: center;
  background-color: white;
  padding: 25px;
  height: auto;
`;

const FlexRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 25px;
  height: auto;
  background-color: white;
`;

const button = styled.button`
  display: block;
  border-radius: 24px;
  border: 1.5px solid silver;
`;

const title = styled.h4`
  color: black;
`;
const description = styled.p`
  color: black;
  opacity: 75;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

function rules() {
  return (
    <Container>
      <Wrapper>
        <FlexRowContainer>
          <title>Comment bien effectuer les execices ?</title>
          <description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </description>
        </FlexRowContainer>
        <FlexRowContainer></FlexRowContainer>
      </Wrapper>
    </Container>
  );
}

export default rules;
