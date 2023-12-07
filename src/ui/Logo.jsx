import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Logo = styled(motion.div)`
  background-image: url("/logo.svg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
  transition: rotate 0.1s ease-in;

  &:hover {
    rotate: 24.5deg;
  }

  ${(props) =>
    props.size === "bigger" &&
    css`
      position: relative;
      width: 9vw;
      height: 9vw;
      right: 2rem;
      margin-left: 2rem;
      padding-right: 0;
    `}
`;
