import styled from "styled-components";
import { LorepIpsum } from "../../common/utils/text";
import { TextArea } from "../rules/components/textArea";
import sanitaireSocial from "../../../pictures/sanitaireSocial.jpg";
import { Separator } from "../rules/components/grid";
import { ImageDys, ImageDysCalculie, ImageDysGraphie, ImageDysOthographie, ImageDysPhasie, ImageDysPlexie, ImageDyspraxie } from "../../../assets/assets";

const FlexContainer = styled.div`
  display: flex;
  padding: 2.5rem;
`;

const ContentFlexContainer = styled.div`
  display: flex;
  padding: 2.5rem 5rem;
`;

const RowReverse = styled.div`
  position: relative;
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
`;

const Row = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const mainProps = {
  title: "Les differents trouble de DYS",
  description: LorepIpsum,
};

const TroublesContainer = styled.div`
  display: block;
`;

const SquareContent = styled.div`
  position: relative;

  width: 50%;
  padding: 2.5rem;
  margin: auto;
`;

const ImageContainer = styled.img`
  position: relative;
  width: 100%;
  overflow: hidden;
  border-radius: 25px;
`;

const MainImageContainer = styled.img`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const dysplexieProps = {
  title: "DYSPLEXIE",
  description: LorepIpsum,
};

const dyspraxieProps = {
  title: "DYSPRAXIE",
  description: LorepIpsum,
};

const dysphasiProps = {
  title: "DYSPHASI",
  description: LorepIpsum,
};

const dysgraphieProps = {
  title: "DYSGRAPHIE",
  description: LorepIpsum,
};

const dyscalculieProps = {
  title: "DYSCALCULIE",
  description: LorepIpsum,
};

const dysorthograpieProps = {
  title: "DYSORTHOGRAPHIE",
  description: LorepIpsum,
};

export default function Trouble() {
  return (
    <TroublesContainer>
      <FlexContainer>
        <Row>
          <SquareContent>
            <TextArea props={mainProps}></TextArea>
          </SquareContent>
          <SquareContent>
            <MainImageContainer
              src={ImageDys}
              alt="Image de dys"
            ></MainImageContainer>
          </SquareContent>
        </Row>
      </FlexContainer>
      <Separator />
      
      <ContentFlexContainer>
        <RowReverse>
          <SquareContent>
            <TextArea props={dysplexieProps}></TextArea>
          </SquareContent>
          <SquareContent>
            <ImageContainer
              src={ImageDysPlexie}
              alt="internaltional"
            ></ImageContainer>
          </SquareContent>
        </RowReverse>
      </ContentFlexContainer>
      <ContentFlexContainer>
        <Row>
          <SquareContent>
            <TextArea props={dyspraxieProps}></TextArea>
          </SquareContent>
          <SquareContent>
            <ImageContainer
              src={ImageDyspraxie}
              alt="internaltional"
            ></ImageContainer>
          </SquareContent>
        </Row>
      </ContentFlexContainer>
      <ContentFlexContainer>
        <RowReverse>
          <SquareContent>
            <TextArea props={dysphasiProps}></TextArea>
          </SquareContent>
          <SquareContent>
            <ImageContainer
              src={ImageDysPhasie}
              alt="internaltional"
            ></ImageContainer>
          </SquareContent>
        </RowReverse>
      </ContentFlexContainer>
      <ContentFlexContainer>
        <Row>
          <SquareContent>
            <TextArea props={dysgraphieProps}></TextArea>
          </SquareContent>
          <SquareContent>
            <ImageContainer
              src={ImageDysGraphie}
              alt="internaltional"
            ></ImageContainer>
          </SquareContent>
        </Row>
      </ContentFlexContainer>
      <ContentFlexContainer>
        <RowReverse>
          <SquareContent>
            <TextArea props={dyscalculieProps}></TextArea>
          </SquareContent>
          <SquareContent>
            <ImageContainer
              src={ImageDysCalculie}
              alt="internaltional"
            ></ImageContainer>
          </SquareContent>
        </RowReverse>
      </ContentFlexContainer>
      <ContentFlexContainer>
        <Row>
          <SquareContent>
            <TextArea props={dysorthograpieProps}></TextArea>
          </SquareContent>
          <SquareContent>
            <ImageContainer
              src={ImageDysOthographie}
              alt="internaltional"
            ></ImageContainer>
          </SquareContent>
        </Row>
      </ContentFlexContainer>
    </TroublesContainer>
  );
}
