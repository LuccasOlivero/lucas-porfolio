import Navbar from "../components/Navbar";
import styled, { css } from "styled-components";
import { Logo } from "./Logo";
import SpinningText from "./SpinningText";
import { Circle } from "./Circle";
import { motion } from "framer-motion";

const StyledAppLayout = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;

  background-color: var(--color-background);
`;

const Main = styled.main`
  height: 100vh;
  width: 75vw;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  background-color: var(--color-background);
  border: 2px solid var(--color-main);
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

const Test = styled.div`
  width: 60%;
  height: 60%;
  border-radius: 100%;
  background-color: blue;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
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
            find out <br /> more ¡
          </Circle>
        </Container>
      </Main>

      <SpinningText text="- contact me - contact me - contact me ">
        <Test />
      </SpinningText>
    </StyledAppLayout>
  );
}

export default AppLayout;
