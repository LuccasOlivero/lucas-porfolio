import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Circle = styled(motion.div)`
  font-size: 0.7vw;
  font-weight: 600;
  border-radius: 50%;
  
  color: #494f96;
  overflow: hidden;
  position: relative;
  backdrop-filter: blur(10px);
  transition: color 0.3s ease-in-out;
  -webkit-backdrop-filter: blur(10px);

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
        right: -2rem;
        width: 4.5rem;
        height: 4.5rem;
      }
    `}

  ${(props) =>
    props.position === "middle" &&
    css`
      width: 9vw;
      height: 9vw;
      margin-top: 8rem;

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
      font-weight: 500;
      padding-top: 1rem;
      letter-spacing: 2px;
      border-radius: 4.5vw 4.5vw 0 0;

      text-align: center;
      position: absolute;
      border-bottom: none;
      background-color: #494f9665;
      outline: 1px solid var(--color-secondary);

      @media (max-width: 1440px) {
        width: 8rem;
        height: 8rem;
        bottom: -3.5rem;
      }

      @media (max-width: 768px) {
        width: 4.5rem;
        height: 4.5rem;
        bottom: -1.5rem;
        line-height: 15px;
      }
    `}
    
    ${(props) =>
    props.type === "bigger" &&
    css`
      width: 800px;
      left: -28rem;
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
    z-index: -1;
    width: 100%;
    height: 100%;
    
    position: absolute;
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
