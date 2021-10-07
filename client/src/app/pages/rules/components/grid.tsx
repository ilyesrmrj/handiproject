import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  position: relative;
`;

export const AlignItemsCenter = styled.div`
  flex-direction: inherit;
  display: inherit;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  position: relative;
  display: block;
  padding: 25px;
  background-color: white;
  max-width: 80%;
  margin: auto;
`;

export const ContainerFluid = styled.div`
  position: relative;
  display: block;

  background-color: white;

  margin: auto;
`;

export const Separator = styled.div`
  position: relative;
  padding: 2rem 0;
  width: 100%;
`;
