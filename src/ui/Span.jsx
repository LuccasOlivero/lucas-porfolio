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
`;
