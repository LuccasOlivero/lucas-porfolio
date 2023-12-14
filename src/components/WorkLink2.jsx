import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import { Header } from "../ui/Header";

function WorkLink2({
  type = "",
  name = "",
  techStack = "",
  border = "",
  border2 = "",
}) {
  const Container = styled.div`
    padding: 0 4rem;
    height: 16rem;
    width: 100%;

    display: flex;
    position: relative;
    align-items: center;
    color: var(--color-main);

    ${(props) =>
      props.border === "borderRigth" &&
      css`
        border-right: 2px solid var(--color-main);
      `}

    ${(props) =>
      props.border2 === "borderBottom" &&
      css`
        border-bottom: 2px solid var(--color-main);
      `}

    &::before {
      content: "";
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;

      position: absolute;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      background-image: url(./face.png);
      transition: clip-path 0.2s ease-in;
      clip-path: polygon(0 0, 100% 0%, 100% 0, 0 0);
    }

    &:after {
      content: "";
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      position: absolute;
      transition: clip-path 0.2s ease-in;
      clip-path: polygon(0 0, 100% 0%, 100% 0, 0 0);
      background-color: var(--color-secondary-blur);
    }

    &:hover::after {
      clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 100%);
    }

    &:hover::before {
      clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 100%);
    }

    &:hover {
      color: white;
      transition: color 0.2s ease-in;
    }
  `;

  const Span = styled.div`
    ${(props) =>
      props.type === "text" &&
      css`
        z-index: 999;
        font-weight: 600;
        font-size: 1.3rem;
        padding-top: 0.5rem;
        letter-spacing: 3px;
        padding-left: 0.2rem;

        align-items: end;
        position: relative;

        @media (max-width: 1440px) {
          font-size: 0.7rem;
        }

        @media (max-width: 440px) {
          font-size: 0.6rem;
        }
      `}

    ${(props) =>
      props.type === "text2" &&
      css`
        right: 0;
        top: 0;
        z-index: 100;
        font-size: 1rem;
        font-weight: 600;
        padding: 3rem 4rem;
        letter-spacing: 3px;

        position: absolute;
        text-transform: uppercase;

        @media (max-width: 1440px) {
          font-size: 0.7rem;
        }

        @media (max-width: 440px) {
          font-size: 0.6rem;
        }
      `}

      ${(props) =>
      props.type === "text3" &&
      css`
        right: 0;
        bottom: 0;
        z-index: 100;
        font-size: 1rem;
        font-weight: 600;
        padding: 3rem 4rem;
        letter-spacing: 3px;

        position: absolute;
        text-transform: uppercase;

        @media (max-width: 1440px) {
          font-size: 0.7rem;
        }

        @media (max-width: 440px) {
          font-size: 0.6rem;
        }
      `}
  `;

  return (
    <>
      <Container type={type} border={border} border2={border2}>
        <>
          <Header as="h2" type="medium">
            {name}
          </Header>
          <Span type="text" as="p">
            {techStack}
          </Span>
          <Span type="text2" as="p">
            {type}
          </Span>
          <Span type="text3" as="p">
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </Span>
        </>
      </Container>
    </>
  );
}

export default WorkLink2;
