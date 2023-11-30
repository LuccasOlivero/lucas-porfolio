import styled from "styled-components";

export const Paragraph = styled.p`
  color: var(--color-main);
  text-wrap: balance;
  font-size: 1.5rem;
  line-height: 2rem;
  margin-top: 1rem;

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
