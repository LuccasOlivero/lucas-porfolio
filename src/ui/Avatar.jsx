import styled from "styled-components";

export const Avatar = styled.div`
  border-radius: 50%;
  width: 20vw;
  height: 20vw;
  max-width: 30rem;
  max-height: 30rem;
  background-image: url(./perfil.png);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  background-color: var(--color-main);

  &::before {
    content: "";
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #3077f125;
  }
`;
