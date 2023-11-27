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
      width: 11rem;
      border: 1px solid var(--color-secondary);
      height: 11rem;
      background-color: #494f9665;
    `}

  ${(props) =>
    props.position === "middle" &&
    css`
      bottom: -4rem;
      right: 6rem;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 11rem;
      border: 1px solid var(--color-secondary);
      height: 11rem;
      background-color: #494f9665;
    `}

  ${(props) =>
    props.position === "bottom" &&
    css`
      display: flex;
      justify-content: center;
      bottom: -5rem;
      padding-top: 1rem;
      width: 11rem;
      border: 1px solid var(--color-secondary);
      height: 11rem;
      background-color: #494f9665;
      font-weight: 500;
      letter-spacing: 2px;
    `}
    
    ${(props) =>
    props.type === "bigger" &&
    css`
      left: -28rem;
      width: 800px;
      height: 800px;
      display: block;
      background-color: var(--color-secondary);
    `}

    ${(props) =>
    props.type === "bigger2" &&
    css`
      bottom: -105rem;
      right: -32rem;
      width: 800px;
      height: 800px;
      display: block;
    `}
  
  position: absolute;
  min-width: 128px;
  min-height: 128px;
  color: #494f96;
  font-size: 1rem;
  border-radius: 100%;

  transition: color 0.3s ease-in-out;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: var(--color-secondary);
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
