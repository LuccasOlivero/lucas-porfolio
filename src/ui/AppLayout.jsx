import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";
import styled, { css } from "styled-components";

import SpinningText from "../components/SpinningText";
import Navbar from "../components/Navbar";
import TextCarousel from "./TextCarousel";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

import { Logo } from "./Logo";
import { Circle } from "./Circle";
import { Header } from "./Header";
import { ContatMe } from "./ContactMe";
import { Section } from "./Section";
import { Span } from "./Span";
import { Paragraph } from "./Paragraph";
import { Row } from "./Row";
import { Box } from "./Box";
import { TextContainer } from "./TextContainer";
import { Main } from "./Main";
import { Avatar } from "./Avatar";
import AboutMe1 from "../components/AboutMe1";
import WorkLinks from "../components/WorkLinks";
import Skils from "../components/Skils";

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

        <TextCarousel />

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
            <Circle position="bottom2">
              find out <br /> more
              <Span type="mleft">
                <FontAwesomeIcon icon={faArrowDownLong} />
              </Span>
            </Circle>
          </Row>
        </Section>

        <TextCarousel />

        <Section>
          <Skils />

          <Row type="borderTop">
            <Span>
              <Logo type="small" />
              how i can help
            </Span>
          </Row>

          <Here />
        </Section>

        <Footer />
      </StyledAppLayout>
    </>
  );
}

export default AppLayout;
