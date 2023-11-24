import styled, { css } from "styled-components";
import { Header } from "../ui/Header";
import { Span } from "../ui/Span";

const Cards = styled.div`
  display: grid;
  width: 100%;
  height: 25rem;
  grid-template-columns: repeat(3, 1fr);
`;

const Test = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0rem 6rem;
  ${(props) =>
    props.type === "borderRight" &&
    css`
      border-right: 0.5px solid var(--color-main);
    `}
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

function HowHelp() {
  return (
    <Cards>
      <Test type="borderRight">
        <Svg />
        <Header as="h3" type="min2">
          PROTOTYPING
        </Header>
        <Span type="text5">
          I use high-fidelity prototypes to get the best experience for your
          site.
        </Span>
      </Test>

      <Test type="borderRight">
        <Svg2 />
        <Header as="h3" type="min2">
          WEB DEVELOPMENT
        </Header>
        <Span type="text5">
          I use high-fidelity prototypes to get the best experience for your
          site.
        </Span>
      </Test>

      <Test>
        <Svg3 />
        <Header as="h3" type="min2">
          WEB DESIGN (UX/UI)
        </Header>
        <Span type="text5">
          I use high-fidelity prototypes to get the best experience for your
          site.
        </Span>
      </Test>
    </Cards>
  );
}

export default HowHelp;
