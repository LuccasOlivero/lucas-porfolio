import styled, { css } from "styled-components";
import { Span } from "../ui/Span";
import { Header } from "../ui/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Section } from "../ui/Section";

function WorkLink2({ type = "", name, techStack }) {
  const Container = styled.div`
    display: flex;
    align-items: center;
    position: relative;
    padding: 0 4rem;
    height: 16rem;
    width: 100%;
    border-bottom: 2px solid var(--color-main);
    border-right: 2px solid var(--color-main);
    color: var(--color-main);

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
    }
  `;

  const Absolute = styled.p`
    position: absolute;
    right: 0;
    color: var(--color-main);
    padding: 3rem 4rem;

    ${(props) =>
      props.position === "absolute" &&
      css`
        top: 0;
        padding: 3rem;
        rotate: 90deg;
      `}

    ${(props) =>
      props.position === "absolute2" &&
      css`
        bottom: 0;
      `}
  `;

  return (
    <>
      <Container type={type}>
        <Span type="text3" as="div">
          <Header as="h2" type="medium">
            {name}
          </Header>
          <Span type="text4" as="p">
            {techStack}
          </Span>
        </Span>

        <Absolute position="absolute">{type}</Absolute>

        <Absolute position="absolute2">
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </Absolute>
      </Container>

      <Section type="primary"></Section>
    </>
  );
}

export default WorkLink2;
