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
  width: 2.3rem;
  height: 2.6rem;

  animation: ${test} 35s steps(25) infinite;

  ${(props) =>
    props.size === "bigger" &&
    css`
      position: absolute;
      width: 9vw;
      height: 9vw;
      right: 2rem;
    `}
`;
