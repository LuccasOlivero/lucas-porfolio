import styled from "styled-components";

import Footer from "../components/Footer";
import MenuModal from "../components/MenuModal";

import { Header } from "../ui/Header";
import { Section } from "../ui/Section";
import { motion } from "framer-motion";
import FramerMagnetic from "../components/FramerMagnetic";
import Form from "../components/Form";

const Button = styled(motion.button)`
  width: 11rem;
  height: 11rem;
  border-radius: 50%;
  color: var(--color-secondary);
  border: 1px solid var(--color-secondary);

  display: flex;
  cursor: pointer;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: #494f9665;

  &::before {
    content: "";
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    border-radius: 50%;

    position: absolute;
    clip-path: circle(0% at 49% 0);
    transition: clip-path 0.3s ease-in;
    background-color: var(--color-secondary);
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

function Contact() {
  return (
    <>
      <MenuModal />
      <Section type="tertiary">
        <Header type="bigger2">Ready to do something cool?</Header>
      </Section>

      <Section type="primary2">
        <Form />

        <FramerMagnetic>
          <Button
            position="bottom"
            whileTap={{
              scale: 0.95,
            }}
          >
            Submit
          </Button>
        </FramerMagnetic>
      </Section>
      <Footer />
    </>
  );
}

export default Contact;
