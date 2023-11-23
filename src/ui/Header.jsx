import styled, { css } from "styled-components";

export const Header = styled.h1`
  position: relative;
  display: flex;
  justify-content: space-between;
  font-size: 13vw;
  line-height: 0.9;
  font-weight: 900;

  -webkit-text-size-adjust: 100%;
  color: var(--color-main);

  ${(props) =>
    props.type === "margin" &&
    css`
      left: -0.6rem;
    `}

  ${(props) =>
    props.type === "medium" &&
    css`
      font-size: 3rem;
    `}

    ${(props) =>
    props.type === "min" &&
    css`
      font-size: 1.3rem;
      letter-spacing: 8px;
      padding-bottom: 0.5rem;
      text-transform: uppercase;
      border-bottom: 1px solid var(--color-main);
    `}

    ${(props) =>
    props.type === "bigger" &&
    css`
      font-size: 7rem;
      color: white;
      font-weight: 600;
    `}
`;
