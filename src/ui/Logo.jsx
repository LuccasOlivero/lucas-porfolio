import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Logo = styled(motion.div)`
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
  transition: rotate 0.2s ease-in;

  background-image: url("/logo.svg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  &:hover {
    rotate: 61deg;
  }

  ${(props) =>
    props.size === "bigger" &&
    css`
      position: absolute;

      width: 9vw;
      height: 9vw;
      top: 1.5rem;
      margin-left: 4vw;
      padding-right: 0;
      z-index: -1;
    `}

  ${(props) =>
    props.size === "white" &&
    css`
      background-image: url("/logoWhite.svg");
    `}
`;
