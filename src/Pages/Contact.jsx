import styled from "styled-components";
import Footer from "../components/Footer";
import { Header } from "../ui/Header";
import { Section } from "../ui/Section";
import { Logo } from "../ui/Logo";
import { motion } from "framer-motion";
import MenuModal from "../components/MenuModal";

const Input = styled.input`
  width: 100%;
  height: 3rem;

  border: none;
  text-decoration: none;
  outline: none;
  border-bottom: 2px solid var(--color-secondary-blur);
`;

const Form = styled.form`
  width: 44rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 2rem 0;
`;

const Button = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-secondary);
  width: 11rem;
  height: 11rem;
  background-color: #494f9665;
  border-radius: 50%;
  cursor: pointer;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: var(--color-secondary);
    clip-path: circle(0% at 49% 0);
    transition: clip-path 0.3s ease-in;
    z-index: -1;
  }

  &:hover::before {
    clip-path: circle(100.4% at 51% 0);
  }

  &:hover {
    color: white;
    transition: color 0.3s ease-in;
  }

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
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <>
      <MenuModal />
      <Section type="tertiary">
        <Header type="bigger2">Ready to do something cool?</Header>
      </Section>

      <Section type="primary2">
        <Form onSubmit={handleSubmit}>
          <Label>
            <Logo /> what is your name?
          </Label>
          <Input type="text" placeholder="type your name" />
          <Label>
            <Logo /> what is your email?
          </Label>
          <Input type="email" placeholder="type your email" />
          <Label>
            <Logo /> what service are you looking for?
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
            <Button
              position="bottom"
              whileTap={{
                scale: 0.95,
              }}
            >
              Submit
            </Button>
          </Span>
        </Form>
      </Section>
      <Footer />
    </>
  );
}

export default Contact;
