import styled, { css } from "styled-components";

export const Span = styled.span`
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
    `}

    
  ${(props) =>
    props.type === "text2" &&
    css`
      font-size: 1rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 3px;
      z-index: 100;
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
    `}

    ${(props) =>
    props.type === "text6" &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: end;
      margin-left: 1rem;
    `}

    ${(props) =>
    props.type === "mleft" &&
    css`
      position: relative;
      margin-left: -0.8rem;
      margin-top: 1.9rem;
    `}
`;
