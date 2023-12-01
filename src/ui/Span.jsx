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
      align-items: center;
      color: var(--color-main);
      font-size: 1.5rem;
      letter-spacing: 0.3rem;
      text-transform: uppercase;
      font-weight: 550;

      @media (max-width: 440px) {
        font-size: 1.2rem;
      }
    `}

    
  ${(props) =>
    props.type === "text2" &&
    css`
      font-size: 1rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 3px;
      z-index: 100;

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
      font-size: 1rem;
      font-weight: 600;
      align-items: end;
      padding-left: 0.2rem;
      z-index: 100;

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
      flex-direction: column;
      justify-content: end;
      margin-left: 1.4rem;
    `}

    ${(props) =>
    props.type === "mleft" &&
    css`
      position: relative;
      margin-left: -0.8rem;
      margin-top: 1.9rem;

      @media (max-width: 768px) {
        margin-top: 0.8rem;
      }
    `}

    ${(props) =>
    props.type === "mleft2" &&
    css`
      position: relative;
      margin-top: 0.8rem;
      font-weight: 400;
      font-size: 1rem;
      letter-spacing: 3px;

      @media (max-width: 768px) {
        margin-top: 0.8rem;
      }
    `}
`;
