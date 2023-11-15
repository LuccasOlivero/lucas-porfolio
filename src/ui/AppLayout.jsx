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
      right: -3rem;
      top: 0;
    `}

  ${(props) =>
    props.position === "bottom" &&
    css`
      bottom: -5rem;
      right: 10rem;
    `}
    
  position: absolute;
  width: 9vw;
  height: 9vw;
  border-radius: 100%;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid var(--color-main);
  background-color: #f2f2f232;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #3077f1;
  font-size: 1.5rem;
`;

const Test = styled.div`
  width: 90%;
  height: 90%;
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
            <Circle position="bottom">work</Circle>
          </TextContainer>
        </Container>
      </Main>

      <SpinningText text=" test test test test test test ">
        <Test />
      </SpinningText>
    </StyledAppLayout>
  );
}

export default AppLayout;
