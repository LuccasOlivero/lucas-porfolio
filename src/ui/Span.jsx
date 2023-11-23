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
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 3px;
    `}

       
  ${(props) =>
    props.type === "text3" &&
    css`
      flex-direction: column;
    `}


    ${(props) =>
    props.type === "text4" &&
    css`
      font-size: 0.8rem;
      font-weight: 500;
      align-items: end;
      padding-left: 0.2rem;
    `}

    ${(props) =>
    props.type === "text5" &&
    css`
      font-size: 1.3rem;
      padding-top: 1.5rem;
      letter-spacing: 3px;
    `}

    ${(props) =>
    props.type === "text6" &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: end;
      margin-left: 1rem;
    `}
`;
