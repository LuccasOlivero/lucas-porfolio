import styled, { css, keyframes } from "styled-components";

const test = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(370deg);
  }
`;

export const Logo = styled.div`
  background-image: url("/logo.svg");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 2rem;
  height: 2rem;

  ${(props) =>
    props.size === "bigger" &&
    css`
      position: absolute;
      width: 9vw;
      height: 9vw;
      right: 2rem;
      animation: ${test} 35s steps(25) infinite;
    `}
`;
