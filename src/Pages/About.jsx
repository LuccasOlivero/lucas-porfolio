import styled from "styled-components";

import Footer from "../components/Footer";
import Skils from "../components/Skils";
import ContactInfo from "../components/ContactInfo";
import MenuModal from "../components/MenuModal";

import { Box } from "../ui/Box";
import { Header } from "../ui/Header";
import { Logo } from "../ui/Logo";
import { Paragraph } from "../ui/Paragraph";
import { Section } from "../ui/Section";
import { Span } from "../ui/Span";
import { Circle } from "../ui/Circle";
import { Row } from "../ui/Row";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfinity } from "@fortawesome/free-solid-svg-icons";
import { ABOUT_ME_TEXT } from "../Constants/constant";

const TextContainer = styled.div`
  width: 80%;
  height: 20rem;
  padding: 4rem;

  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  border-top: 2px solid var(--color-main);
  border-left: 2px solid var(--color-main);
  border-bottom: 2px solid var(--color-main);
`;

const Container = styled.div`
  width: 75vw;
  margin: 0 auto;

  display: flex;
  position: relative;
  justify-content: end;
  border-left: 2px solid var(--color-main);
  border-right: 2px solid var(--color-main);
`;

function AboutMe() {
  return (
    <>
      <MenuModal />
      <Section type="tertiary">
        <Header type="bigger2">Live a new experience every day.</Header>
      </Section>

      <Circle type="bigger" />

      <Container>
        <Box size="medium">
          <ContactInfo color="main" />
        </Box>

        <Box size="large">
          <Header type="medium">Hi👋 I am Lucas Olivero.</Header>
          <Paragraph>{ABOUT_ME_TEXT}</Paragraph>
        </Box>
      </Container>

      <Container type="end">
        <TextContainer>
          <Span type="text">
            <Logo />
            Education
          </Span>
          <Paragraph type="noMargin" as="p">
            Education in computer science, Kloketen Anexo (JavaScript, Java).
            <Span type="text4">2016 - 2019</Span>
          </Paragraph>

          <Paragraph type="noMargin" as="p">
            Three-year psychology degree at the National University of Córdoba.
            <Span type="text4">2019 - 2022</Span>
          </Paragraph>

          <Paragraph type="noMargin" as="p">
            Self-Taught Learning.
            <Span type="mt" />
            <FontAwesomeIcon icon={faInfinity} />
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
