import { motion } from "framer-motion";
import styled from "styled-components";

export const Avatar = styled(motion.div)`
  border-radius: 50%;
  max-height: 30rem;
  max-width: 30rem;
  width: 20vw;
  height: 20vw;

  position: relative;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(./perfil.png);
  background-color: var(--color-main);
  outline: 3px solid var(--color-secondary);

  &::before {
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: absolute;
    background-color: #3077f125;
  }

  &:hover::before {
    content: "go to about me";
    font-size: 1.3rem;
    letter-spacing: 4px;

    display: flex;
    color: white;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    transition: backdrop-filter 0.2s ease-in;
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
