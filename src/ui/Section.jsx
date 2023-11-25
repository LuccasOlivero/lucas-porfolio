import styled, { css } from "styled-components";

export const Section = styled.div`
  border-left: 2px solid var(--color-main);
  border-right: 2px solid var(--color-main);
  width: 75vw;
  margin: 0 auto;
  position: relative;

  ${(props) =>
    props.type === "primary" &&
    css`
      height: 75vh;
      display: flex;
      padding: 0 6rem;
      align-items: center;
      justify-content: space-between;
    `}

  ${(props) =>
    props.type === "secondary" &&
    css`
      height: 65vh;
      display: flex;
      padding: 0 6rem;
      border-left: 1px solid white;
      border-right: 1px solid white;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
    `}
`;
