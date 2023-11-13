import Navbar from "../components/Navbar";
import styled, { css } from "styled-components";
import { Logo } from "./Logo";

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
      left: -0.5rem;
    `}

  display: flex;
  width: 100%;
  justify-content: space-between;
  font-size: 16rem;
  line-height: 14rem;
  font-weight: bold;

  color: var(--color-main);
`;

const Container = styled.div`
  position: relative;
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  /* outline: 5px solid red; */
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Main>
        <Navbar />
        <Container>
          <Header type="margin">
            Lucas
            <Logo size="bigger" />
          </Header>
          <Header>WebDev</Header>
        </Container>
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
