import styled from "styled-components";

import Footer from "../components/Footer";
import Skils from "../components/Skils";

import { Box } from "../ui/Box";
import { Header } from "../ui/Header";
import { Logo } from "../ui/Logo";
import { Paragraph } from "../ui/Paragraph";
import { Section } from "../ui/Section";
import { Span } from "../ui/Span";
import { Circle } from "../ui/Circle";
import { Row } from "../ui/Row";
import ContactInfo from "../components/ContactInfo";

const TextContainer = styled.div`
  position: relative;
  width: 80%;
  height: 20rem;
  padding: 4rem;
  border-top: 2px solid var(--color-main);
  border-left: 2px solid var(--color-main);
  border-bottom: 2px solid var(--color-main);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Container = styled.div`
  border-left: 2px solid var(--color-main);
  border-right: 2px solid var(--color-main);
  display: flex;
  width: 75vw;
  margin: 0 auto;
  position: relative;
  justify-content: end;
`;

function AboutMe() {
  return (
    <>
      <Section type="tertiary">
        <Header type="bigger2">Live a new experience every day.</Header>
      </Section>

      <Circle type="bigger" />

      <Container>
        <Box size="medium">
          <ContactInfo />
        </Box>

        <Box size="large">
          <Header type="medium">Hi👋 I am Lucas Olivero.</Header>
          <Paragraph>
            Frontend Developer from Argentina with 1 year of expertise.
            Specializing in React and experienced with Angular, I&apos;m
            dedicated to delivering high-quality solutions. Passionate about
            crafting exceptional websites that exceed client expectations, I am
            committed to providing an outstanding user experience.
          </Paragraph>
        </Box>
      </Container>

      <Container type="end">
        <TextContainer>
          <Span type="text">
            <Logo />
            Education
          </Span>
          <Paragraph type="noMargin" as="p">
            Kloketen Anexo, formacion en informatica
            <Span type="text4">- 2019</Span>
          </Paragraph>

          <Paragraph type="noMargin" as="p">
            Kloketen Anexo, formacion en informatica
            <Span type="text4"> -current</Span>
          </Paragraph>
        </TextContainer>
      </Container>

      <Container>
        <Box size="medium2"></Box>
        <Box size="large2"></Box>
      </Container>

      <Section>
        <Row type="borderTop">
          <Span type="text">
            <Logo />
            skills
          </Span>
        </Row>
        <Skils />
      </Section>

      <Footer />
    </>
  );
}

export default AboutMe;
