import styled, { css } from "styled-components";

export const Row = styled.div`
  color: var(--color-main);
  width: 100%;
  height: 5rem;
  padding: 0 6rem;
  font-size: 1.5rem;
  font-weight: 550;
  letter-spacing: 0.3rem;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;

  ${(props) =>
    props.type === "borderTop" &&
    css`
      border-top: 2px solid var(--color-main);
      border-bottom: 2px solid var(--color-main);
      text-transform: uppercase;
      justify-content: space-between;
    `}

  ${(props) =>
    props.type === "borderTop2" &&
    css`
      position: absolute;
      width: 100%;
      bottom: 0;
      border-top: 2px solid white;
      text-transform: uppercase;
      justify-content: space-between;
      color: white;
      letter-spacing: 3px;
      font-size: 1rem;
    `}

  ${(props) =>
    props.type === "bigger" &&
    css`
      border-bottom: 2px solid var(--color-main);
      height: 7rem;
      font-size: 4.4rem;
      font-weight: 700;
      justify-content: space-between;
      /* background-color: var(--color-background); */
      position: relative;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        /* background-image: url(./face.png); */
        background-color: #3077f1;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        clip-path: polygon(0 0, 100% 0%, 100% 0, 0 0);
        transition: clip-path 0.2s ease-in;
      }

      &:hover::before {
        clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 100%);
      }

      // BUG
      &:hover {
        color: white;
      }
    `}

    ${(props) =>
    props.type === "bigger2" &&
    css`
      height: 7rem;
      font-size: 4.4rem;
      font-weight: 700;
      justify-content: center;
    `}

    ${(props) =>
    props.type === "bigger3" &&
    css`
      height: 20rem;
      font-size: 4.4rem;
      font-weight: 700;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      font-size: 1rem;
      gap: 2rem;
    `}
`;
