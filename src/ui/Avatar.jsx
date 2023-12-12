import { motion } from "framer-motion";
import styled from "styled-components";

export const Avatar = styled(motion.div)`
  width: 20vw;
  height: 20vw;
  max-width: 30rem;
  max-height: 30rem;
  border-radius: 50%;

  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(./perfil.png);
  background-color: var(--color-main);
  outline: 3px solid var(--color-secondary);

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #3077f11f;
    z-index: 200;
  }

  &::before {
    content: "go to about me";
    color: white;
    font-size: 1.7rem;
    font-weight: 500;
    letter-spacing: 4px;
    opacity: 0;
    visibility: hidden;

    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
  }

  &:hover::before {
    opacity: 1;
    visibility: visible;
  }

  @media (max-width: 1440px) {
    height: 30vw;
    width: 30vw;
    margin-top: 1.5rem;
  }

  @media (max-width: 768px) {
    height: 35vw;
    width: 35vw;
  }
`;
