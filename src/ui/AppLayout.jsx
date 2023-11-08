import Navbar from "../components/Navbar";
import styled from "styled-components";

const StyledAppLayout = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: var(--color-background);
`;

const Main = styled.main`
  display: grid;
  height: 100vh;
  width: 80%;
  background-color: var(--color-background);
  border: 2px solid var(--color-main);
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Main>
        <Navbar />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
