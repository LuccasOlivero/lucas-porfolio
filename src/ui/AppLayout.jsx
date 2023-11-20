import Navbar from "../components/Navbar";
import styled, { css } from "styled-components";
import { Logo } from "./Logo";
import SpinningText from "./SpinningText";
import { Circle } from "./Circle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";
import TextCarousel from "./TextCarousel";

const StyledAppLayout = styled.div`
  width: 100%;
  height: 100vh;
  /* overflow: hidden; */

  background-color: var(--color-background);
`;

const Main = styled.main`
  height: 90vh;
  width: 75vw;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  /* background-color: var(--color-background); */
  outline: 2px solid var(--color-main);
`;

const Header = styled.h1`
  ${(props) =>
    props.type === "margin" &&
    css`
      position: relative;
      left: -0.6rem;
    `}

  display: flex;
  justify-content: space-between;
  font-size: 13vw;
  width: 100%;
  line-height: 0.9;
  font-weight: 900;
  -webkit-text-size-adjust: 100%;

  color: var(--color-main);
`;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
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
`;

const Face = styled.div`
  position: relative;
  width: 65%;
  height: 65%;
  border-radius: 100%;
  background-color: black;
  background-image: url(/face.png);
  background-size: 60% 75%;
  background-repeat: no-repeat;
  background-position: center;
`;

const Span = styled.span`
  position: relative;
  margin-left: 0.4rem;
`;

const StyledSection = styled.div`
  outline: 2px solid var(--color-main);
  height: 75vh;
  width: 75vw;
  margin: 0 auto;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 6rem;
`;

const Test = styled.div`
  border: 2px solid blue;
  border-radius: 50%;
  width: 800px;
  height: 600px;
`;

function AppLayout() {
  return (
    <>
      <StyledAppLayout>
        <SpinningText text="✈️ contact me ✈️ contact me ✈️ contact me ">
          <Face />
        </SpinningText>
        <Main>
          <Navbar />

          <Container>
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
              <Span>
                <FontAwesomeIcon icon={faArrowDownLong} />
              </Span>
            </Circle>
          </Container>
        </Main>

        <TextCarousel />

        <StyledSection>
          <TextContainer>
            <Logo />
            about me
            <span>
              Hi 👋 Im Lucas de Oliveira from Brazil. Experienced Webflow &
              WordPress Developer with 5 years of expertise, dedicated to
              delivering high-quality solutions. Strong leadership skills,
              ensuring timely and successful project completion. Passionate
              about creating exceptional websites that exceed client
              expectations. Committed to providing an outstanding user
              experience.
            </span>
          </TextContainer>

          <Test />
        </StyledSection>
      </StyledAppLayout>
    </>
  );
}

export default AppLayout;
