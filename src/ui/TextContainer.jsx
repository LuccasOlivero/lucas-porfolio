import styled, { css } from "styled-components";

export const TextContainer = styled.div`
  font-size: 1rem;
  line-height: 1.3rem;
  padding: 4rem 4rem 0 4rem;
  max-width: 3500px;

  @media (max-width: 1440px) {
    padding: 0 2rem;
  }

  ${(props) =>
    props.type === "width" &&
    css`
      width: 40vw;
      padding: 0;

      @media (max-width: 1440px) {
        width: 100%;
      }
    `}
`;
