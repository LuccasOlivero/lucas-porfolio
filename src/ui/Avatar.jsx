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
  border: 2px solid var(--color-secondary);

  &::after {
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 200;
    border-radius: 50%;

    background-color: #3077f11f;
    position: absolute;
  }

  &::before {
    content: "go to about me";
    top: 0;
    left: 0;
    opacity: 0;
    width: 100%;
    height: 100%;
    font-weight: 500;
    font-size: 1.7rem;
    letter-spacing: 4px;
    border-radius: 50%;

    display: flex;
    color: white;
    position: absolute;
    visibility: hidden;
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
