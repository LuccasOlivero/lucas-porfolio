import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

import SpinningText from "../components/SpinningText";
import Navbar from "../components/Navbar";
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
import WorkLinks from "../components/WorkLinks";
import Skils from "../components/Skils";
import Cards from "../components/Cards";

const StyledAppLayout = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  /* overflow-x: hidden; */

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
          <Navbar />
          <Hero />
        </Main>

        <TextCarousel text1="keep" text2="going" />

        <Section type="primary">
          <AboutMe1 />
        </Section>

        <Circle type="bigger" />
        {/* <Circle type="bigger2" /> */}

        <Section>
          <Row type="borderTop">
            <Span>
              <Logo />
              Selected Work & projects
            </Span>
          </Row>

          <WorkLinks
            name="Oslo Bank"
            type="project"
            techStack="React, Tailwind CSS."
          />
          <WorkLinks
            name="South Studio"
            type="work"
            techStack="React, Styled Components, Framer Motion."
          />
          <WorkLinks
            name="NewBody gym"
            type="work"
            techStack="React, Tailwind CSS."
          />
          <WorkLinks
            name="3xBet"
            type="project"
            techStack="React, TypeScript, Tailwind CSS, Framer Motion."
          />
          <WorkLinks
            name="test"
            type="test"
            techStack="test test test test test"
          />
          <WorkLinks
            name="Ushuaia Visión"
            type="work"
            techStack="React, TypeScript, Styled Components."
          />

          <Row type="bigger2">
            <Circle position="bottom">
              find out <br /> more
              <Span type="mleft">
                <FontAwesomeIcon icon={faArrowDownLong} />
              </Span>
            </Circle>
          </Row>
        </Section>

        <TextCarousel text2="skils" type="skils" />

        <Section>
          <Skils />
          <Row type="borderTop">
            <Span>
              <Logo />
              how i can help
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
