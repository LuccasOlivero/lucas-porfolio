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
  width: 7vw;
  height: 7vw;

  background-image: url(./proto.svg);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  @media (max-width: 440px) {
    width: 60px;
    height: 60px;
  }
`;

const Svg2 = styled.figure`
  width: 7vw;
  height: 7vw;

  background-image: url(./pc.svg);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;

  @media (max-width: 440px) {
    width: 60px;
    height: 60px;
  }
`;

const Svg3 = styled.figure`
  width: 7vw;
  height: 7vw;

  background-image: url(./web.svg);
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
        <Svg3 />
      </Card>
      <Card
        title="WEB DEVELOPMENT"
        text="I build websites from scratch that clients can manage in the way they want."
        type="borderRight"
      >
        <Svg2 />
      </Card>
      <Card
        title="PROTOTYPING"
        text="I use high-fidelity prototypes to get the best experience for your site."
      >
        <Svg />
      </Card>
    </Container>
  );
}

export default Cards;
