import styled, { css } from "styled-components";

export const TextContainer = styled.div`
  width: 55vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1em;
  line-height: 1.3;
  max-width: 1600px;

  ${(props) =>
    props.type === "width" &&
    css`
      width: 30vw;
    `}
`;
