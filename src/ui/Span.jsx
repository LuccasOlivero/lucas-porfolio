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
      font-size: 2rem;
      letter-spacing: 0.5rem;
    `}
`;
