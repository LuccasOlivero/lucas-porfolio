import styled, { css } from "styled-components";

export const Box = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;

  ${(props) =>
    props.size === "medium" &&
    css`
      width: 35vw;
      height: 30rem;
      padding: 0 4rem;
      border-right: 2px solid var(--color-main);
    `}

  ${(props) =>
    props.size === "medium2" &&
    css`
      width: 35vw;
      height: 6rem;
      padding: 0 4rem;
      border-right: 2px solid var(--color-main);
    `}


  ${(props) =>
    props.size === "large" &&
    css`
      width: 75vw;
      height: 30rem;
      padding: 0 4rem;
    `}

    ${(props) =>
    props.size === "large2" &&
    css`
      width: 75vw;
      height: 6rem;
      padding: 0 4rem;
    `}
`;
