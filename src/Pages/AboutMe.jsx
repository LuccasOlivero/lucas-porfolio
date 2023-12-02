import styled from "styled-components";
import { Box } from "../ui/Box";
import { Header } from "../ui/Header";
import { Logo } from "../ui/Logo";
import { Paragraph } from "../ui/Paragraph";
import { Section } from "../ui/Section";
import { Span } from "../ui/Span";
import Footer from "../components/Footer";
import { Circle } from "../ui/Circle";
import Skils from "../components/Skils";
import { Row } from "../ui/Row";

const Test = styled.div`
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

const Test2 = styled.div`
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

      <Test2>
        <Box size="medium">
          <Header type="min3">
            email
            <Span type="mleft2">lucas.dev@gmail.com</Span>
          </Header>

          <Header type="min3">
            linkedin
            <Span type="mleft2">linkedin.com/in/lucas-olivero</Span>
          </Header>

          <Header type="min3">
            twitter / x<Span type="mleft2">@luccasOlivero</Span>
          </Header>

          <Header type="min3">
            github
            <Span type="mleft2">github.com/LuccasOlivero</Span>
          </Header>
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
      </Test2>

      <Test2 type="end">
        <Test>
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
        </Test>
      </Test2>

      <Test2>
        <Box size="medium2"></Box>
        <Box size="large2"></Box>
      </Test2>

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
