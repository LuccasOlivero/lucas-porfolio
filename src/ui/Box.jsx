import styled, { css } from "styled-components";

export const Box = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${(props) =>
    props.size === "medium" &&
    css`
      padding: 0 4rem;
      width: 35vw;
      height: 25rem;
      border-right: 2px solid var(--color-main);
      background-color: red;
    `}

  ${(props) =>
    props.size === "large" &&
    css`
      background-color: green;
      padding: 0 4rem;
      width: 75vw;
      height: 25rem;
    `}
`;
