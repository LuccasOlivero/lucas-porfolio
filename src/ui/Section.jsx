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
      height: 90vh;
      padding: 0 4rem;
      display: flex;
      align-items: center;

      @media (max-width: 1024px) {
        height: 85vh;
        padding: 1rem 4rem;
      }

      @media (max-width: 768px) {
        padding: 0 2rem;
      }

      @media (max-width: 440px) {
        height: 70vh;
        padding: 1rem 1rem;
      }
    `}

  ${(props) =>
    props.type === "primary2" &&
    css`
      height: 100%;
      padding: 0 4rem;
      display: flex;
      align-items: center;
      justify-content: center;

      @media (max-width: 1024px) {
        height: 85vh;
        padding: 1rem 4rem;
      }

      @media (max-width: 768px) {
        padding: 0 2rem;
      }

      @media (max-width: 440px) {
        height: 70vh;
        padding: 1rem 1rem;
      }
    `}

  ${(props) =>
    props.type === "secondary" &&
    css`
      height: 65vh;
      display: flex;
      padding: 0 4rem;
      border-left: 2px solid white;
      border-right: 2px solid white;

      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;

      @media (max-width: 768px) {
        padding: 0 2rem;
      }
    `}

    ${(props) =>
    props.type === "tertiary" &&
    css`
      height: 50vh;
      display: flex;
      padding: 0 4rem;
      margin-top: 3.6rem;

      outline: 2px solid var(--color-main);
      background-color: var(--color-main);
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;

      @media (max-width: 768px) {
        padding: 0 2rem;
      }
    `}
`;
