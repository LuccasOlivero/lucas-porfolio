import Navbar from "../components/Navbar";
import styled, { css } from "styled-components";
import { Logo } from "./Logo";
import SpinningText from "./SpinningText";
import { Circle } from "./Circle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";
import TextCarousel from "./TextCarousel";
import { Header } from "./Header";
import { ContainerColumn } from "./ContainerColumn";
import { ContatMe } from "./ContactMe";
import { Section } from "./Section";
import { Img } from "./Img";
import { Span } from "./Span";
import { Paragraph } from "./Paragraph";
import { Row } from "./Row";

const StyledAppLayout = styled.div`
  width: 100%;
  height: 100vh;

  background-color: var(--color-background);
`;

const Main = styled.main`
  height: 98vh;
  width: 75vw;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  outline: 2px solid var(--color-main);
`;

const TextContainer = styled.div`
  width: 55vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1em;
  line-height: 1.3;
  max-width: 1600px;

  ${(props) =>
    props.type === "width" &&
    css`
      width: 30vw;
    `}
`;

const SpanLeft = styled.span`
  position: relative;
  margin-left: 0.4rem;
`;

function AppLayout() {
  return (
    <>
      <StyledAppLayout>
        <SpinningText text="✈️ contact me ✈️ contact me ✈️ contact me ">
          <ContatMe />
        </SpinningText>
        <Main>
          <Navbar />

          <ContainerColumn>
            <TextContainer>
              <Header type="margin">
                Lucas
                <Logo size="bigger" />
              </Header>
              <Header as="h2">WebDev</Header>
              <Circle
                position="top"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: -1 }}
              >
                about me
              </Circle>
              <Circle
                position="middle"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: -1 }}
              >
                work
              </Circle>
            </TextContainer>
            <Circle position="bottom">
              find out <br /> more
              <SpanLeft>
                <FontAwesomeIcon icon={faArrowDownLong} />
              </SpanLeft>
            </Circle>
          </ContainerColumn>
        </Main>

        <TextCarousel />

        <Section type="primary">
          <TextContainer type="width">
            <Span type="text">
              <Logo />
              about me
            </Span>
            <Paragraph>
              Hi 👋 Im Lucas Olivero from Brazil. Experienced Webflow &
              WordPress Developer with 5 years of expertise, dedicated to
              delivering high-quality solutions. Strong leadership skills,
              ensuring timely and successful project completion. Passionate
              about creating exceptional websites that exceed client
              expectations. Committed to providing an outstanding user
              experience.
            </Paragraph>
          </TextContainer>

          <Img />
        </Section>

        <Section>
          <Row type="borderTop">
            <Span>
              <Logo />
              Selected Work & projects
            </Span>
          </Row>

          <Row type="bigger">
            Oslo Bank
            <Span type="text2">project</Span>
          </Row>

          <Row type="bigger">
            Oslo Bank
            <Span type="text2">project</Span>
          </Row>

          <Row type="bigger">
            Oslo Bank
            <Span type="text2">project</Span>
          </Row>

          <Row type="bigger">
            Oslo Bank
            <Span type="text2">project</Span>
          </Row>

          <Row type="bigger">
            Oslo Bank
            <Span type="text2">project</Span>
          </Row>

          <Row type="bigger">
            Oslo Bank
            <Span type="text2">project</Span>
          </Row>

          <Row type="bigger2">
            <Circle position="bottom2">
              find out <br /> more
              <SpanLeft>
                <FontAwesomeIcon icon={faArrowDownLong} />
              </SpanLeft>
            </Circle>
          </Row>
        </Section>

        <TextCarousel />

        <Section type="primary" />
      </StyledAppLayout>
    </>
  );
}

export default AppLayout;
