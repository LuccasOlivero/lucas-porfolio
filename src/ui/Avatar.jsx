import { motion } from "framer-motion";
import styled from "styled-components";

export const Avatar = styled(motion.div)`
  border-radius: 50%;
  width: 20vw;
  height: 20vw;
  max-width: 30rem;
  max-height: 30rem;
  background-image: url(./perfil.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  background-color: var(--color-main);
  outline: 3px solid var(--color-secondary);

  &::before {
    content: "";
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #3077f125;
  }

  &:hover::before {
    content: "go to about me";
    font-size: 1.3rem;
    letter-spacing: 4px;
    color: white;
    display: flex;
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
