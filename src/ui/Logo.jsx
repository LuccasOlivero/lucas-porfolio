import styled, { css } from "styled-components";

export const Logo = styled.div`
  background-image: url("/logo.svg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 2.3rem;
  height: 2.6rem;

  ${(props) =>
    props.size === "bigger" &&
    css`
      /* position: absolute; */
      width: 13rem;
      height: 13rem;
      right: 0;
    `}
`;
