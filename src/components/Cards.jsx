import styled from "styled-components";
import Card from "./Card";

const Container = styled.div`
  display: grid;
  width: 100%;
  height: 25rem;
  grid-template-columns: repeat(3, 1fr);
`;

const Svg = styled.figure`
  background-image: url(./proto.svg);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 40%;
  height: 40%;
`;

const Svg2 = styled.figure`
  background-image: url(./pc.svg);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 40%;
  height: 40%;
`;

const Svg3 = styled.figure`
  background-image: url(./web.svg);
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  width: 40%;
  height: 40%;
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
        text=" I use high-fidelity prototypes to get the best experience for your
        site."
        type="borderRight"
      >
        <Svg2 />
      </Card>

      <Card
        title="WEB DESIGN "
        text=" I use high-fidelity prototypes to get the best experience for your
        site."
      >
        <Svg3 />
      </Card>
    </Container>
  );
}

export default Cards;
