import styled, { css } from "styled-components";

export const Box = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 4rem;

  ${(props) =>
    props.size === "medium" &&
    css`
      width: 35vw;
      height: 25rem;
      border-right: 2px solid var(--color-main);
    `}

  ${(props) =>
    props.size === "large" &&
    css`
      width: 75vw;
      height: 25rem;
    `}
`;
