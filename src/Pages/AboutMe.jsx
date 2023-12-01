import styled from "styled-components";
import { Box } from "../ui/Box";
import { Header } from "../ui/Header";
import { Logo } from "../ui/Logo";
import { Paragraph } from "../ui/Paragraph";
import { Section } from "../ui/Section";
import { Span } from "../ui/Span";
import Footer from "../components/Footer";

const Test = styled.div`
  position: relative;
  width: 80%;
  height: 20rem;
  border-top: 2px solid var(--color-main);
  border-left: 2px solid var(--color-main);
  border-bottom: 2px solid var(--color-main);
`;

function AboutMe() {
  return (
    <>
      <Section type="tertiary">
        <Header type="bigger2">Live a new experience every day.</Header>
      </Section>

      <Section>
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
      </Section>

      <Section type="end">
        <Test />
      </Section>

      <Section>
        <Box size="medium">
          <Span type="text">
            <Logo />
            Education
          </Span>
        </Box>
        <Box size="large">
          <Span type="text">
            <Logo />
            kloke
          </Span>
          <Span type="text">
            <Logo />
            computacion
          </Span>
        </Box>
      </Section>

      <Footer></Footer>
    </>
  );
}

export default AboutMe;
