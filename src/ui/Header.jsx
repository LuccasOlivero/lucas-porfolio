import styled, { css } from "styled-components";

export const Header = styled.h1`
  ${(props) =>
    props.type === "margin" &&
    css`
      position: relative;
      left: -0.6rem;
    `}

  display: flex;
  justify-content: space-between;
  font-size: 13vw;
  width: 100%;
  line-height: 0.9;
  font-weight: 900;

  -webkit-text-size-adjust: 100%;
  color: var(--color-main);
`;
