import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Header = styled(motion.h1)`
  font-size: 16vw;
  line-height: 0.8;
  font-weight: 600;

  color: white;
  display: flex;
  position: relative;

  ${(props) =>
    props.type === "color-main" &&
    css`
      left: -1rem;
      color: var(--color-main);
    `}

  ${(props) =>
    props.type === "test" &&
    css`
      font-size: 13vw;
      font-weight: 700;
      justify-content: end;
      color: var(--color-main);
    `}

  ${(props) =>
    props.type === "medium" &&
    css`
      z-index: 100;
      font-size: 4rem;
      color: var(--color-secondary);

      @media (max-width: 1440px) {
        font-size: 3rem;
      }

      @media (max-width: 1024px) {
        font-size: 2rem;
      }

      @media (max-width: 440px) {
        font-size: 1.6rem;
      }
    `}


    ${(props) =>
    props.type === "min" &&
    css`
      font-size: 1.3rem;
      letter-spacing: 8px;
      padding-bottom: 0.5rem;

      display: flex;
      color: var(--color-main);
      text-transform: uppercase;
      justify-content: space-between;
      border-bottom: 1px solid var(--color-main);

      @media (max-width: 440px) {
        font-size: 1rem;
        letter-spacing: 6px;
      }
    `}

    ${(props) =>
    props.type === "min2" &&
    css`
      font-size: 1.3rem;
      margin-top: 1.5rem;
      letter-spacing: 8px;

      color: var(--color-main);
      text-transform: uppercase;

      @media (max-width: 440px) {
        font-size: 1rem;
      }
    `}

    ${(props) =>
    props.type === "min3" &&
    css`
      font-size: 1.6rem;
      margin-top: 2rem;
      letter-spacing: 8px;

      display: block;
      color: var(--color-main);
      text-transform: uppercase;

      @media (max-width: 440px) {
        font-size: 1rem;
      }
    `}

    ${(props) =>
    props.color === "main" &&
    css`
      font-size: 1.6rem;
      margin-top: 2rem;
      letter-spacing: 8px;

      display: block;
      color: var(--color-main);
      text-transform: uppercase;

      @media (max-width: 440px) {
        font-size: 1rem;
      }
    `}

    ${(props) =>
    props.color === "third" &&
    css`
      margin-top: 2rem;
      font-size: 1.6rem;
      letter-spacing: 8px;

      display: block;
      text-transform: uppercase;
      color: var(--color-third);

      @media (max-width: 440px) {
        font-size: 1rem;
      }
    `}


    ${(props) =>
    props.type === "bigger" &&
    css`
      color: white;
      font-size: 7rem;
      font-weight: 600;

      @media (max-width: 768px) {
        font-size: 5rem;
      }

      @media (max-width: 440px) {
        font-size: 4rem;
      }
    `}

    ${(props) =>
    props.type === "bigger2" &&
    css`
      color: white;
      font-size: 7.5rem;
      font-weight: 700;

      @media (max-width: 768px) {
        font-size: 5rem;
      }

      @media (max-width: 440px) {
        font-size: 4rem;
      }
    `}
`;
