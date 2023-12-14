import styled, { css } from "styled-components";

import { Header } from "../ui/Header";
import { Span } from "../ui/Span";

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem 4rem;

  ${(props) =>
    props.type === "borderRight" &&
    css`
      border-right: 0.5px solid var(--color-main);
    `}

  @media (max-width: 1440px) {
    border-right: none;
    border-bottom: 0.5px solid var(--color-main);
  }

  @media (max-width: 768px) {
    padding: 1.5rem 2rem;
  }

  @media (max-width: 440px) {
    padding: 1.5rem 1rem;
  }
`;

const Test = styled.div`
  width: 8vw;
  height: 8vw;
`;

function Card({ children, title, text, type = "" }) {
  return (
    <Container type={type}>
      <Test>{children}</Test>
      <Header as="h3" type="min2">
        {title}
      </Header>
      <Span type="text5">{text}</Span>
    </Container>
  );
}

export default Card;
