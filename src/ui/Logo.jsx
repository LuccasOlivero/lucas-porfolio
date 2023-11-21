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
  transition: all 0.1s ease-in;
  margin-right: 1rem;

  &:hover {
    rotate: 24deg;
  }

  ${(props) =>
    props.size === "bigger" &&
    css`
      position: absolute;
      width: 9vw;
      height: 9vw;
      right: 2rem;
      padding-right: 0;
      animation: ${test} 35s steps(25) infinite;
    `}
`;
