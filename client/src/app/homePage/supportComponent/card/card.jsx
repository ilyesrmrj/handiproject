import { ImageSupport } from "../../../common/utils/pictures";
import {
  CardStyle,
  TitleSupportCard,
  ArticleButton,
} from "../../../common/utils/style";

const Card = ({ title, img }) => {
  return (
    <>
      <CardStyle>
        <TitleSupportCard>{title}</TitleSupportCard>
        {ImageSupport(img)}
        <ArticleButton>Voir Article</ArticleButton>
      </CardStyle>
    </>
  );
};

export default Card;
