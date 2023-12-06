import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import SpinningText from "../components/SpinningText";
import TextCarousel from "./TextCarousel";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

import { Logo } from "./Logo";
import { Circle } from "./Circle";
import { ContatMe } from "./ContactMe";
import { Section } from "./Section";
import { Span } from "./Span";
import { Row } from "./Row";
import { Main } from "./Main";

import AboutMe1 from "../components/AboutMe1";
import Skils from "../components/Skils";
import Cards from "../components/Cards";
import Work1 from "../components/Work1";

const StyledAppLayout = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  margin: 0 auto;

  background-color: var(--color-background);
`;

function AppLayout() {
  return (
    <>
      <StyledAppLayout>
        <SpinningText text="✈️ contact me ✈️ contact me ✈️ contact me ">
          <ContatMe />
        </SpinningText>

        <Main>
          <Hero />
        </Main>

        <TextCarousel text1="keep" text2="going" />

        <Section type="primary">
          <AboutMe1 />
        </Section>

        <Circle type="bigger" />

        <Section></Section>

        <TextCarousel text2="skils" type="skils" />

        <Section>
          <Skils />
          <Row type="borderTop">
            <Span type="text">
              <Logo /> i can help with
            </Span>
          </Row>
          <Cards />
        </Section>

        <Footer />
      </StyledAppLayout>
    </>
  );
}

export default AppLayout;
