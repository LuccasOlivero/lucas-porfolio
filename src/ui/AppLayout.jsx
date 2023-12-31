import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";

import TextCarousel from "./TextCarousel";

import { Logo } from "./Logo";
import { Circle } from "./Circle";
import { Section } from "./Section";
import { Span } from "./Span";
import { Row } from "./Row";
import { Main } from "./Main";

import Hero from "../components/Hero";
import Footer from "../components/Footer";
import AboutMe1 from "../components/AboutMe1";
import Skils from "../components/Skils";
import Cards from "../components/Cards";
import Work1 from "../components/Work1";
import MenuModal from "../components/MenuModal";

const StyledAppLayout = styled.div`
  width: 100%;
  height: 100vh;
  margin: 0 auto;

  position: relative;
  background-color: var(--color-background);
`;

function AppLayout() {
  return (
    <>
      <MenuModal />

      <StyledAppLayout>
        <Main>
          <Hero />
        </Main>

        <TextCarousel text1="keep" text2="going" />

        <Section type="primary">
          <AboutMe1 />
        </Section>

        <Circle type="bigger" />

        <Section>
          <Row type="borderTop">
            <Span type="text">
              <Logo />
              Work & projects
            </Span>
          </Row>

          <Work1 />

          <Row type="bigger2">
            <Circle position="bottom">
              find out <br /> more
              <FontAwesomeIcon icon={faArrowDownLong} />
            </Circle>
          </Row>
        </Section>

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
