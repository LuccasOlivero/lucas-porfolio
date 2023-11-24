import styled, { css } from "styled-components";
import { Header } from "../ui/Header";
import { Span } from "../ui/Span";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0rem 6rem;
  ${(props) =>
    props.type === "borderRight" &&
    css`
      border-right: 0.5px solid var(--color-main);
    `}
`;

function Card({ children, title, text, type = "" }) {
  return (
    <Container type={type}>
      {children}
      <Header as="h3" type="min2">
        {title}
      </Header>
      <Span type="text5">{text}</Span>
    </Container>
  );
}

export default Card;