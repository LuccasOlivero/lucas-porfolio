import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Header = styled(motion.h1)`
  font-size: 13vw;
  line-height: 0.9;
  font-weight: 900;

  position: relative;
  display: flex;
  justify-content: space-between;
  color: white;

  ${(props) =>
    props.type === "color-white" &&
    css`
      color: var(--color-main);
    `}

  ${(props) =>
    props.type === "medium" &&
    css`
      font-size: 4rem;
      z-index: 100;
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
      text-transform: uppercase;
      border-bottom: 1px solid var(--color-main);
      color: var(--color-main);

      @media (max-width: 440px) {
        font-size: 1rem;
        letter-spacing: 6px;
      }
    `}

    ${(props) =>
    props.type === "min2" &&
    css`
      font-size: 1.3rem;
      letter-spacing: 8px;
      text-transform: uppercase;
      margin-top: 1.5rem;
      color: var(--color-main);

      @media (max-width: 440px) {
        font-size: 1rem;
      }
    `}

    ${(props) =>
    props.type === "min3" &&
    css`
      font-size: 1.6rem;
      letter-spacing: 8px;
      text-transform: uppercase;
      margin-top: 2rem;
      display: block;
      color: var(--color-main);

      @media (max-width: 440px) {
        font-size: 1rem;
      }
    `}

    ${(props) =>
    props.type === "min3white" &&
    css`
      font-size: 1.6rem;
      letter-spacing: 8px;
      text-transform: uppercase;
      margin-top: 2rem;
      display: block;
      color: var(--color-third);

      @media (max-width: 440px) {
        font-size: 1rem;
      }
    `}


    ${(props) =>
    props.type === "bigger" &&
    css`
      font-size: 7rem;
      color: white;
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
      font-size: 7.5rem;
      color: white;
      font-weight: 700;

      @media (max-width: 768px) {
        font-size: 5rem;
      }

      @media (max-width: 440px) {
        font-size: 4rem;
      }
    `}
`;
