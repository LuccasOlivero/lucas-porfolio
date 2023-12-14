import styled from "styled-components";

import Footer from "../components/Footer";
import MenuModal from "../components/MenuModal";

import { Header } from "../ui/Header";
import { Section } from "../ui/Section";
import Form from "../components/Form";

function Contact() {
  return (
    <>
      <MenuModal />
      <Section type="tertiary">
        <Header type="bigger2">Ready to do something cool?</Header>
      </Section>
      <Section type="primary2">
        <Form />
      </Section>
      <Footer />
    </>
  );
}

export default Contact;
