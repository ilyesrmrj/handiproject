import TextCommonComponent from "../../../common/commonComponents/textCommonComponent";
import { ImageCommitmentComponent } from "../../../common/utils/pictures";
import { Wrapper } from "../../../common/utils/style";
import { CommitmentText, CommitmentTitle } from "../../../common/utils/text";

const Commitment = () => (
  <Wrapper>
    <TextCommonComponent title={CommitmentTitle} text={CommitmentText} buttonLabel={undefined} href={undefined} />
    <ImageCommitmentComponent />
  </Wrapper>
);

export default Commitment;
