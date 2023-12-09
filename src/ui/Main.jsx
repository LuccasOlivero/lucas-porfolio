import styled from "styled-components";

export const Main = styled.main`
  height: 90vh;
  width: 75vw;
  margin: 0 auto;
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  outline: 2px solid var(--color-main);

  @media (max-width: 768px) {
    height: 60vh;
  }
`;
