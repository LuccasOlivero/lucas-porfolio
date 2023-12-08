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
      width: 13rem;
      border: 1px solid var(--color-secondary);
      height: 13rem;
      background-color: #494f9665;

      @media (max-width: 1440px) {
        width: 8rem;
        height: 8rem;
      }

      @media (max-width: 768px) {
        width: 4.5rem;
        height: 4.5rem;
        right: -2rem;
      }
    `}

  ${(props) =>
    props.position === "middle" &&
    css`
      bottom: -4rem;
      right: 6rem;
      display: flex;
      width: 13rem;
      height: 13rem;
      border: 1px solid var(--color-secondary);
      align-items: center;
      justify-content: center;
      background-color: #494f9665;

      @media (max-width: 1440px) {
        width: 8rem;
        height: 8rem;
      }

      @media (max-width: 768px) {
        width: 4.5rem;
        height: 4.5rem;
      }
    `}

  ${(props) =>
    props.position === "bottom" &&
    css`
      display: flex;
      justify-content: center;
      bottom: -6rem;
      padding-top: 1rem;
      width: 11.5rem;
      border: 1px solid var(--color-secondary);
      height: 11.5rem;
      background-color: #494f9665;
      font-weight: 500;
      letter-spacing: 2px;

      @media (max-width: 1440px) {
        bottom: -3.5rem;
        width: 8rem;
        height: 8rem;
      }

      @media (max-width: 768px) {
        bottom: -1.5rem;
        width: 4.5rem;
        height: 4.5rem;
        line-height: 15px;
      }
    `}
    
    ${(props) =>
    props.type === "bigger" &&
    css`
      left: -28rem;
      width: 800px;
      height: 800px;
      display: block;
      background-color: var(--color-secondary-blur);
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
  color: #494f96;
  font-size: 1rem;
  border-radius: 100%;

  transition: color 0.3s ease-in-out;
  backdrop-filter: blur(10px);

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

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
