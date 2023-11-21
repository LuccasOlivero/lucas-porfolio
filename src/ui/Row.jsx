import styled, { css } from "styled-components";

export const Row = styled.div`
  color: var(--color-main);
  width: 100%;
  height: 5rem;
  padding: 0 6rem;
  font-size: 1.5rem;
  font-weight: 550;
  letter-spacing: 0.3rem;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;

  ${(props) =>
    props.type === "borderTop" &&
    css`
      border-top: 2px solid var(--color-main);
      border-bottom: 2px solid var(--color-main);
      text-transform: uppercase;
      justify-content: space-between;
    `}

  ${(props) =>
    props.type === "bigger" &&
    css`
      border-bottom: 2px solid var(--color-main);

      height: 7rem;
      font-size: 4.4rem;
      font-weight: 700;
      justify-content: space-between;
      background-color: var(--color-background);
    `}

    ${(props) =>
    props.type === "bigger2" &&
    css`
      height: 7rem;
      font-size: 4.4rem;
      font-weight: 700;
      justify-content: center;
    `}
`;
