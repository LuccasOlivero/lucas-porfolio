import styled, { css } from "styled-components";

export const Buttom = styled.button`
  width: 20rem;
  font-size: 3rem;
  font-weight: 600;
  padding: 0.8rem 0;
  letter-spacing: 13px;
  border: 2px solid #0e1525;
  margin: 1.8rem 0rem 1rem 0;
  border-radius: 85px 85px 85px 85px;

  position: relative;
  text-transform: uppercase;
  backdrop-filter: blur(10px);
  background-color: transparent;
  transition: color 0.3s ease-in-out;
  -webkit-backdrop-filter: blur(10px);

  ${(props) =>
    props.type === "small" &&
    css`
      width: auto;
      height: 3rem;
      color: white;
      font-size: 1rem;
      font-weight: 300;
      margin-right: 1rem;
      letter-spacing: 1px;
      padding: 0.5rem 1.5rem;
      border: 2px solid white;

      &:hover {
        background-color: var(--color-secondary);
      }

      @media (max-width: 768px) {
        font-size: 0.7rem;
      }

      @media (max-width: 440px) {
        width: 2rem;
        padding: 1rem 1.2rem;
        margin-right: 0.5rem;
        margin: 0rem 0.5rem 0.8rem;
      }
    `}

  ${(props) =>
    props.type === "large" &&
    css`
      width: auto;
      height: 3rem;
      font-size: 1rem;
      font-weight: 300;
      color: white;
      margin-right: 1rem;
      letter-spacing: 1px;
      border: 2px solid white;
      padding: 0.5rem 1.5rem;

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
