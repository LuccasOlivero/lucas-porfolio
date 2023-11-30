import styled, { css } from "styled-components";

export const Section = styled.div`
  border-left: 2px solid var(--color-main);
  border-right: 2px solid var(--color-main);
  width: 75vw;
  margin: 0 auto;
  position: relative;

  ${(props) =>
    props.type === "primary" &&
    css`
      height: 75vh;
      padding: 0 4rem;
      display: flex;
      align-items: center;
      /* justify-content: space-between; */

      @media (max-width: 1024px) {
        height: 85vh;
      }

      @media (max-width: 768px) {
        padding: 0 2rem;
      }
    `}

  ${(props) =>
    props.type === "secondary" &&
    css`
      height: 65vh;
      display: flex;
      padding: 0 4rem;
      border-left: 1px solid white;
      border-right: 1px solid white;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;

      @media (max-width: 768px) {
        padding: 0 2rem;
      }
    `}
`;
