import TextCommonComponent from "../../common/commonComponents/textCommonComponent";
import { ImageCommitmentComponent } from "../../common/utils/image";
import { Wrapper } from "../../common/utils/style";
import { CommitmentText, CommitmentTitle } from "../../common/utils/text";

const Commitment = () => (
  <Wrapper>
    <TextCommonComponent title={CommitmentTitle} text={CommitmentText} />
    <ImageCommitmentComponent />
  </Wrapper>
);

export default Commitment;
