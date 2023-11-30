import styled, { css } from "styled-components";

export const TextContainer = styled.div`
  width: 55vw;
  font-size: 1rem;
  line-height: 1.3rem;
  max-width: 1600px;

  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${(props) =>
    props.type === "width" &&
    css`
      width: 40vw;

      @media (max-width: 1024px) {
        width: 100%;
      }
    `}
`;
