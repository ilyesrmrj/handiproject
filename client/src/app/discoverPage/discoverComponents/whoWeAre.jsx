import TextCommonComponent from "../../common/commonComponents/textCommonComponent";
import { Wrapper } from "../../common/utils/style";
import {
  DiscoverPageTitle,
  DiscoverPageText,
  DiscoverButtonLabel,
} from "../../common/utils/text";
import { ImageDiscoverComponent } from "../../common/utils/pictures";

const WhoWeAre = () => (
  <Wrapper>
    <TextCommonComponent
      title={DiscoverPageTitle}
      text={DiscoverPageText}
      buttonLabel={DiscoverButtonLabel}
    />
    <ImageDiscoverComponent />
  </Wrapper>
);

export default WhoWeAre;
