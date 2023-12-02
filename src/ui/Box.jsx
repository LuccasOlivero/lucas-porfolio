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
      height: 30rem;
      border-right: 2px solid var(--color-main);
    `}

  ${(props) =>
    props.size === "medium2" &&
    css`
      padding: 0 4rem;
      width: 35vw;
      height: 6rem;
      border-right: 2px solid var(--color-main);
    `}


  ${(props) =>
    props.size === "large" &&
    css`
      padding: 0 4rem;
      width: 75vw;
      height: 30rem;
    `}

    ${(props) =>
    props.size === "large2" &&
    css`
      padding: 0 4rem;
      width: 75vw;
      height: 6rem;
    `}
`;
