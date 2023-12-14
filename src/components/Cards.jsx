import styled, { css } from "styled-components";

import Card from "./Card";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  @media (max-width: 1440px) {
    grid-template-columns: 1fr;
  }
`;

const Svg = styled.figure`
  ${(props) =>
    props.file === "web" &&
    css`
      background-image: url(./web.svg);
    `}
  ${(props) =>
    props.file === "pc" &&
    css`
      background-image: url(./pc.svg);
    `}

  ${(props) =>
    props.file === "proto" &&
    css`
      background-image: url(./proto.svg);
    `}

  width: 7vw;
  height: 7vw;

  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  @media (max-width: 440px) {
    width: 60px;
    height: 60px;
  }
`;

function Cards() {
  return (
    <Container>
      <Card
        title="WEB DESIGN "
        text="My main focus is designing pixel perfect websites and interfaces."
        type="borderRight"
      >
        <Svg file="web" />
      </Card>
      <Card
        title="WEB DEVELOPMENT"
        text="I build websites from scratch that clients can manage in the way they want."
        type="borderRight"
      >
        <Svg file="pc" />
      </Card>
      <Card
        title="PROTOTYPING"
        text="I use high-fidelity prototypes to get the best experience for your site."
      >
        <Svg file="proto" />
      </Card>
    </Container>
  );
}

export default Cards;
