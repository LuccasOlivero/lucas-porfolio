import styled, { css } from "styled-components";

export const Buttom = styled.button`
  width: 20rem;
  padding: 0.8rem 0;
  margin: 1.8rem 0rem 1rem 0;
  border-radius: 85px 85px 85px 85px;
  font-size: 3rem;
  letter-spacing: 13px;
  border: 2px solid #0e1525;
  font-weight: 600;

  position: relative;
  background-color: transparent;
  text-transform: uppercase;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: color 0.3s ease-in-out;

  ${(props) =>
    props.type === "small" &&
    css`
      width: auto;
      height: 3rem;
      padding: 0.5rem 1.5rem;
      margin-right: 1rem;
      font-size: 1rem;
      font-weight: 300;
      border: 2px solid white;
      color: white;
      letter-spacing: 1px;

      &:hover {
        background-color: var(--color-secondary);
      }

      @media (max-width: 768px) {
        font-size: 0.7rem;
      }

      @media (max-width: 440px) {
        margin-right: 0.5rem;
        padding: 1rem 1.2rem;
        margin: 0rem 0.5rem 0.8rem;
        width: 2rem;
      }
    `}

  ${(props) =>
    props.type === "large" &&
    css`
      width: auto;
      height: 3rem;
      padding: 0.5rem 1.5rem;
      margin-right: 1rem;
      font-size: 1rem;
      font-weight: 300;
      border: 2px solid white;
      color: white;
      letter-spacing: 1px;

      &:hover {
        background-color: var(--color-secondary);
      }

      @media (max-width: 768px) {
        font-size: 0.7rem;
      }

      @media (max-width: 440px) {
        margin-right: 0.5rem;
        padding: 0.5rem 1rem;
      }
    `}
`;
