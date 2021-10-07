import TextCommonComponent from "../../../common/commonComponents/textCommonComponent";
import { ImagePlanComponent } from "../../../common/utils/pictures";
import { Wrapper } from "../../../common/utils/style";
import {
  PlanComponentButton,
  PlanComponentText,
  PlanComponentTitle,
} from "../../../common/utils/text";

const PlanComponent = () => (
  <Wrapper>
    <TextCommonComponent
      title={PlanComponentTitle}
      text={PlanComponentText}
      buttonLabel={PlanComponentButton}
      href="/register-school"
    />
    <ImagePlanComponent />
  </Wrapper>
);

export default PlanComponent;
