import styled, { css } from "styled-components";

export const TextContainer = styled.div`
  font-size: 1rem;
  line-height: 1.3rem;
  padding: 0 4rem;
  max-width: 3500px;
  position: relative;

  @media (max-width: 1440px) {
    padding: 0 2rem;
  }

  ${(props) =>
    props.type === "width" &&
    css`
      width: 40vw;

      @media (max-width: 1440px) {
        width: 100%;
      }
    `}
`;
