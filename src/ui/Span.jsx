import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Span = styled(motion.span)`
  display: flex;

  ${(props) =>
    props.type === "mt" &&
    css`
      margin-left: 0.3rem;
    `}

  ${(props) =>
    props.type === "text" &&
    css`
      font-size: 2rem;
      font-weight: 600;
      letter-spacing: 0.3rem;

      align-items: center;
      color: var(--color-main);
      text-transform: uppercase;

      @media (max-width: 440px) {
        font-size: 1.2rem;
      }
    `}

    
  ${(props) =>
    props.type === "text2" &&
    css`
      z-index: 100;
      font-size: 1rem;
      font-weight: 600;
      letter-spacing: 3px;

      text-transform: uppercase;

      @media (max-width: 1440px) {
        font-size: 0.7rem;
      }

      @media (max-width: 440px) {
        font-size: 0.6rem;
      }
    `}

       
  ${(props) =>
    props.type === "text3" &&
    css`
      flex-direction: column;
    `}


    ${(props) =>
    props.type === "text4" &&
    css`
      z-index: 100;
      font-size: 1rem;
      font-weight: 600;
      padding-left: 0.2rem;
      align-items: end;

      @media (max-width: 1440px) {
        font-size: 0.7rem;
      }

      @media (max-width: 440px) {
        font-size: 0.6rem;
      }
    `}

    ${(props) =>
    props.type === "text5" &&
    css`
      font-size: 1.2rem;
      padding-top: 0.5rem;
      letter-spacing: 3px;
      line-height: 33px;
      font-weight: 400;
      z-index: 100;
      color: var(--color-main);

      @media (max-width: 440px) {
        font-size: 0.8rem;
        line-height: 23px;
        letter-spacing: 2px;
      }
    `}

    ${(props) =>
    props.type === "text6" &&
    css`
      margin-left: 1.4rem;
      flex-direction: column;
      justify-content: end;
    `}

    ${(props) =>
    props.type === "mleft" &&
    css`
      margin-left: -0.8rem;
      margin-top: 1.9rem;
      position: relative;

      @media (max-width: 768px) {
        margin-top: 0.8rem;
      }
    `}

    ${(props) =>
    props.type === "mleft2" &&
    css`
      margin-top: 0.8rem;
      font-weight: 400;
      font-size: 1rem;
      letter-spacing: 3px;
      position: relative;

      @media (max-width: 768px) {
        margin-top: 0.8rem;
      }
    `}
`;
