import styled from "styled-components";
import Card from "./Card";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  @media (max-width: 1440px) {
    grid-template-columns: 1fr;
  }
`;

const Svg = styled.figure`
  background-image: url(./proto.svg);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;

  @media (max-width: 440px) {
    width: 60px;
    height: 60px;
  }
`;

const Svg2 = styled.figure`
  background-image: url(./pc.svg);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;

  @media (max-width: 440px) {
    width: 60px;
    height: 60px;
  }
`;

const Svg3 = styled.figure`
  background-image: url(./web.svg);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;

  @media (max-width: 440px) {
    width: 60px;
    height: 60px;
  }
`;

function Cards() {
  return (
    <Container>
      <Card
        title="PROTOTYPING"
        text="I use high-fidelity prototypes to get the best experience for your site."
        type="borderRight"
      >
        <Svg />
      </Card>

      <Card
        title="WEB DEVELOPMENT"
        text="I build websites from scratch that clients can manage in the way they want."
        type="borderRight"
      >
        <Svg2 />
      </Card>

      <Card
        title="WEB DESIGN "
        text="My main focus is designing pixel perfect websites and interfaces."
      >
        <Svg3 />
      </Card>
    </Container>
  );
}

export default Cards;
