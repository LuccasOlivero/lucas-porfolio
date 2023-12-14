import styled, { css } from "styled-components";

export const Paragraph = styled.p`
  font-size: 1.5rem;
  margin-top: 1rem;
  line-height: 2rem;

  text-wrap: balance;
  color: var(--color-main);

  ${(props) =>
    props.type === "noMargin" &&
    css`
      margin-top: 0.7rem;

      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid var(--color-secondary-blur);
    `}

  @media (max-width: 1024px) {
    font-size: 1.3rem;
    line-height: 1.7rem;
  }

  @media (max-width: 768px) {
    line-height: 1.5rem;
  }

  @media (max-width: 440px) {
    font-size: 1rem;
    line-height: 1.2rem;
  }
`;
