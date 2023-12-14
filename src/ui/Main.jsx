import styled from "styled-components";

export const Main = styled.main`
  width: 75vw;
  height: 90vh;
  margin: 0 auto;

  display: flex;
  overflow: hidden;
  position: relative;
  flex-direction: column;

  outline: 2px solid var(--color-main);

  @media (max-width: 768px) {
    height: 60vh;
  }
`;
