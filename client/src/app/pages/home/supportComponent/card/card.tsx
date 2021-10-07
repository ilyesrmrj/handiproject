import { ImageSupport } from "../../../../common/utils/pictures";
import {
  CardStyle,
  TitleSupportCard,
  ArticleButton,
} from "../../../../common/utils/style";

type CardPropsTypes = {
  title: String,
  img: String
}

const Card = ({ title, img }: CardPropsTypes) => {
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
