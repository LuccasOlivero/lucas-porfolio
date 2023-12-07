import styled from "styled-components";
import Footer from "../components/Footer";
import { Header } from "../ui/Header";
import { Section } from "../ui/Section";
import { Logo } from "../ui/Logo";

const Input = styled.input`
  width: 100%;
  height: 3rem;

  border: none;
  text-decoration: none;
  outline: none;
  border-bottom: 2px solid var(--color-secondary-blur);
`;

const Container = styled.div`
  width: 44rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 2rem 0;
`;

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-secondary);
  width: 11rem;
  height: 11rem;
  background-color: #494f9665;
  border-radius: 50%;

  @media (max-width: 1440px) {
    width: 8rem;
    height: 8rem;
  }

  @media (max-width: 768px) {
    width: 4.5rem;
    height: 4.5rem;
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  letter-spacing: 3px;
  padding-top: 4rem;
  font-size: 1.5rem;
  color: var(--color-main);
`;

const Span = styled.span`
  margin: auto;
  padding-top: 2rem;
`;

function Contact() {
  return (
    <>
      <Section type="tertiary">
        <Header type="bigger2">Ready to do something cool?</Header>
      </Section>

      <Section type="primary2">
        <Container>
          <Label>
            <Logo /> what is your name?
          </Label>
          <Input type="text" placeholder="type your name" />
          <Label>
            <Logo /> what is your email?
          </Label>
          <Input type="email" placeholder="type your email" />
          <Label>
            <Logo /> what service are you looking for
          </Label>
          <Input
            type="text"
            placeholder="type your type the service that you want"
          />
          <Label>
            <Logo /> you message
          </Label>
          <Input type="text" placeholder="I want to have a amazing website" />

          <Span>
            <Circle position="bottom">Submit</Circle>
          </Span>
        </Container>
      </Section>
      <Footer />
    </>
  );
}

export default Contact;
