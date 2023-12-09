import { motion } from "framer-motion";
import styled, { css, keyframes } from "styled-components";

const hover = keyframes`
 from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(15deg);
  }
`;

const test = keyframes`
 from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const smoothRotation = keyframes`
 0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(+=15deg);
  }
`;

export const Logo = styled(motion.div)`
  background-image: url("/logo.svg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
  transition: rotate 0.2s ease-in;

  &:hover {
    rotate: 61deg;
  }

  ${(props) =>
    props.size === "bigger" &&
    css`
      position: absolute;
      width: 9vw;
      height: 9vw;
      right: 2rem;
      top: 1.5rem;
      right: 4rem;
      margin-left: 2rem;
      padding-right: 0;
      z-index: -1;
      animation: ${test} 15s linear infinite,
        ${smoothRotation} 1.5s cubic-bezier(0.4, 2.2, 0.3, 1) infinite;
    `}

  ${(props) =>
    props.size === "white" &&
    css`
      background-image: url("/logoWhite.svg");
    `}
`;
