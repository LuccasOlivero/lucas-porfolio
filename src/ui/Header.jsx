import styled, { css } from "styled-components";

export const Header = styled.h1`
  position: relative;
  display: flex;
  justify-content: space-between;
  font-size: 13vw;
  /* width: 100%; */
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
`;
