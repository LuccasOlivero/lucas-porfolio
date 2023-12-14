import styled, { css } from "styled-components";

export const TextContainer = styled.div`
  font-size: 1rem;
  max-width: 3500px;
  line-height: 1.3rem;
  padding: 4rem 4rem 0 4rem;

  @media (max-width: 1440px) {
    padding: 0 2rem;
  }

  ${(props) =>
    props.type === "width" &&
    css`
      padding: 0;
      width: 40vw;

      @media (max-width: 1440px) {
        width: 100%;
      }
    `}
`;
