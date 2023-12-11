import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Circle = styled(motion.div)`
  position: relative;
  color: #494f96;
  border-radius: 50%;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: color 0.3s ease-in-out;
  font-size: 0.7vw;
  font-weight: 600;
  overflow: hidden;

  ${(props) =>
    props.position === "top" &&
    css`
      top: -2rem;
      width: 9vw;
      height: 9vw;

      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #494f9665;
      border: 1px solid var(--color-secondary);

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
      margin-top: 8rem;
      width: 9vw;
      height: 9vw;

      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #494f9665;
      border: 1px solid var(--color-secondary);

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
      bottom: 0;
      width: 9vw;
      height: 4.5vw;
      border-radius: 4.5vw 4.5vw 0 0;
      font-weight: 500;
      letter-spacing: 2px;
      padding-top: 1rem;

      text-align: center;
      position: absolute;
      background-color: #494f9665;
      border-bottom: none;
      outline: 1px solid var(--color-secondary);

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
      position: absolute;
      background-color: var(--color-secondary-blur);
    `}

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  &::before {
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    position: absolute;

    z-index: -1;
    position: absolute;
    background-color: var(--color-secondary);
    clip-path: circle(0% at 50% 0);
    transition: clip-path 0.3s ease-in;
  }

  &:hover::before {
    clip-path: circle(100% at 50% 0);
  }

  &:hover {
    color: white;
  }
`;
