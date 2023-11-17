import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Circle = styled(motion.div)`
  ${(props) =>
    props.position === "top" &&
    css`
      right: -4rem;
      top: -2rem;
      display: flex;
      align-items: center;
      justify-content: center;
    `}

  ${(props) =>
    props.position === "middle" &&
    css`
      bottom: -4rem;
      right: 6rem;
      display: flex;
      align-items: center;
      justify-content: center;
    `}

  ${(props) =>
    props.position === "bottom" &&
    css`
      bottom: -5vw;
      padding-top: 1.5rem;
      display: flex;
      justify-content: center;
    `}
  
  position: absolute;
  width: 10vw;
  height: 10vw;
  color: #494f96;
  font-size: 1.2rem;

  border-radius: 100%;
  border: 1px solid var(--color-main);
  background-color: #494f9665;
  transition: all 0.3s ease-in;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #495096;
    clip-path: circle(0% at 49% 0);
    transition: clip-path 0.3s ease-in;
    z-index: -1;
  }

  &:hover::before {
    clip-path: circle(100.4% at 51% 0);
  }

  &:hover {
    color: white;
  }
`;
