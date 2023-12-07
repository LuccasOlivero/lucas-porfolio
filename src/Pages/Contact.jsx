import styled from "styled-components";
import Footer from "../components/Footer";
import { Header } from "../ui/Header";
import { Section } from "../ui/Section";

const Input = styled.input`
  width: 100%;
  height: 3rem;
  border-bottom: 2px solid var(--color-main);
`;

const Test = styled.div`
  width: 44rem;
  height: 30rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

function Contact() {
  return (
    <>
      <Section type="tertiary">
        <Header type="bigger2">Ready to do something cool?</Header>
      </Section>

      <Section type="primary2">
        <Test>
          <label>* what is your name?</label>
          <Input type="text" />
          <label>* what is your name?</label>
          <Input type="email" />
          <label>* what is your name?</label>
          <Input type="text" />
          <label>* what is your name?</label>
          <Input type="text" />
        </Test>
      </Section>
      <Footer />
    </>
  );
}

export default Contact;
