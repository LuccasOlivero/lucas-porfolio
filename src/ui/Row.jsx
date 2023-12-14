import styled, { css, keyframes } from "styled-components";

const reveal = keyframes`
  from{
    scale: .8;
    opacity: 0;
    translate: 0 50px;
  }
  to{
    scale: 1;
    opacity: 1;
    translate: 0 0;
  }
`;

export const Row = styled.div`
  width: 100%;
  height: 5rem;
  padding: 0 4rem;
  font-weight: 550;
  font-size: 1.5rem;
  letter-spacing: 0.3rem;

  display: flex;
  overflow: hidden;
  position: relative;
  align-items: center;
  color: var(--color-main);

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
      bottom: 0;
      width: 100%;
      font-size: 1rem;
      letter-spacing: 3px;
      border-top: 1px solid white;

      color: white;
      position: absolute;
      text-transform: uppercase;
      justify-content: space-between;

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
      height: 7rem;
      font-weight: 700;
      font-size: 4.4rem;
      transition: color 0.2s ease-in;
      border-bottom: 2px solid var(--color-main);

      position: relative;
      justify-content: space-between;

      // scroll animation only with css!!
      animation: ${reveal} linear both;
      animation-timeline: view();
      animation-range: entry 5% cover 20%;

      &::before {
        content: "";
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        position: absolute;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url(./face.png);
        transition: clip-path 0.2s ease-in;
        clip-path: polygon(0 0, 100% 0%, 100% 0, 0 0);
      }

      &:after {
        content: "";
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        position: absolute;
        transition: clip-path 0.2s ease-in;
        clip-path: polygon(0 0, 100% 0%, 100% 0, 0 0);
        background-color: var(--color-secondary-blur);
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
      font-weight: 700;
      font-size: 4.4rem;
      justify-content: center;
    `}

    ${(props) =>
    props.type === "bigger3" &&
    css`
      gap: 2rem;
      height: 20rem;
      font-weight: 700;
      font-size: 4.4rem;

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
