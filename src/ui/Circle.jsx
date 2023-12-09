import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const Circle = styled(motion.div)`
  position: relative;
  color: #494f96;
  border-radius: 50%;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: color 0.3s ease-in-out;
  font-size: 1rem;
  font-weight: 600;

  ${(props) =>
    props.position === "top" &&
    css`
      top: -2rem;
      width: 13rem;
      height: 13rem;

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
      margin-top: 7rem;
      width: 13rem;
      height: 13rem;

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
      position: absolute;
      bottom: -6rem;
      padding-top: 1rem;
      width: 11.5rem;
      height: 11.5rem;
      font-weight: 500;
      letter-spacing: 2px;

      display: flex;
      justify-content: center;
      background-color: #494f9665;
      border: 1px solid var(--color-secondary);

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
    border-radius: 50%;

    z-index: -1;
    position: absolute;
    background-color: var(--color-secondary);
    clip-path: circle(0% at 49% 0);
    transition: clip-path 0.3s ease-in;
  }

  &:hover::before {
    clip-path: circle(100.4% at 51% 0);
  }

  &:hover {
    color: white;
  }
`;
