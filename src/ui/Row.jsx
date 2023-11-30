import styled, { css } from "styled-components";

export const Row = styled.div`
  width: 100%;
  height: 5rem;
  padding: 0 4rem;
  font-size: 1.5rem;
  font-weight: 550;
  letter-spacing: 0.3rem;

  color: var(--color-main);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0 2rem;
  }

  @media (max-width: 440px) {
    padding: 0 1rem;
  }

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
      border-top: 1px solid white;
      text-transform: uppercase;
      justify-content: space-between;
      color: white;
      letter-spacing: 3px;
      font-size: 1rem;

      @media (max-width: 768px) {
        font-size: 0.8rem;
      }

      @media (max-width: 440px) {
        font-size: 0.7rem;
        text-align: center;
      }
    `}

  ${(props) =>
    props.type === "bigger" &&
    css`
      border-bottom: 2px solid var(--color-main);
      height: 7rem;
      font-size: 4.4rem;
      font-weight: 700;
      justify-content: space-between;
      position: relative;
      transition: color 0.2s ease-in;

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-image: url(./face.png);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        clip-path: polygon(0 0, 100% 0%, 100% 0, 0 0);
        transition: clip-path 0.2s ease-in;
      }

      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--color-secondary-blur);
        clip-path: polygon(0 0, 100% 0%, 100% 0, 0 0);
        transition: clip-path 0.2s ease-in;
      }

      &:hover::after {
        clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 100%);
      }

      &:hover::before {
        clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 100%);
      }

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
      gap: 2rem;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

      @media (max-width: 1440px) {
        grid-template-columns: 1fr;
        height: 100%;
        padding: 2rem 4rem;
      }

      @media (max-width: 768px) {
        padding: 2rem 2rem;
      }

      @media (max-width: 440px) {
        padding: 2rem 1rem;
      }
    `}
`;
