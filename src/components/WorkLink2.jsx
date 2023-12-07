import styled, { css } from "styled-components";
import { Header } from "../ui/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

function WorkLink2({
  type = "",
  name = "",
  techStack = "",
  border = "",
  border2 = "",
}) {
  const Container = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    padding: 0 4rem;
    height: 16rem;
    width: 100%;
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
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-image: url(./face.png);
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
      clip-path: polygon(0 0, 100% 0%, 100% 0, 0 0);
      transition: clip-path 0.2s ease-in;
    }

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: var(--color-secondary-blur);
      clip-path: polygon(0 0, 100% 0%, 100% 0, 0 0);
      transition: clip-path 0.2s ease-in;
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
        position: relative;
        font-size: 1.3rem;
        font-weight: 600;
        align-items: end;
        padding-left: 0.2rem;
        letter-spacing: 3px;
        padding-top: 0.5rem;
        z-index: 999;

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
        position: absolute;
        right: 0;
        top: 0;
        padding: 3rem 4rem;
        font-size: 1rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 3px;
        z-index: 100;

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
        position: absolute;
        right: 0;
        bottom: 0;
        padding: 3rem 4rem;
        font-size: 1rem;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 3px;
        z-index: 100;

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
        <div>
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
        </div>
      </Container>
    </>
  );
}

export default WorkLink2;
