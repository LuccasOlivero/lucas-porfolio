import Navbar from "../components/Navbar";
import styled, { css } from "styled-components";
import { Logo } from "./Logo";
import SpinningText from "./SpinningText";

const StyledAppLayout = styled.div`
  width: 100%;
  height: 100vh;

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

const Circle = styled.div`
  ${(props) =>
    props.position === "top" &&
    css`
      right: -4rem;
      top: -2rem;
      display: flex;
      align-items: center;
      justify-content: center;
    `}

  ${(props) =>
    props.position === "middle" &&
    css`
      bottom: -4rem;
      right: 6rem;
      display: flex;
      align-items: center;
      justify-content: center;
    `}

    ${(props) =>
    props.position === "bottom" &&
    css`
      bottom: -4.5rem;
      padding-top: 1rem;
      display: flex;
      align-items: start;
      justify-content: center;
    `}
    
  position: absolute;
  width: 10vw;
  height: 10vw;
  border-radius: 100%;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid var(--color-main);
  background-color: #3077f145;
  color: #3077f1;
  font-size: 1.2rem;
  transition: all 0.2s ease-in;

  &:hover {
    background-color: #3077f1;
  }
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
            <Circle position="top">about me</Circle>
            <Circle position="middle">work</Circle>
          </TextContainer>
          <Circle position="bottom">
            find out <br /> more ¡
          </Circle>
        </Container>
      </Main>

      <SpinningText text=" test test test test test test ">
        <Test />
      </SpinningText>
    </StyledAppLayout>
  );
}

export default AppLayout;
