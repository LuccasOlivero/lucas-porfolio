import { Section } from "../ui/Section";
import styled from "styled-components";
import WorkLink2 from "../components/WorkLink2";
import { Row } from "../ui/Row";
import { Span } from "../ui/Span";
import { Logo } from "../ui/Logo";
import Work1 from "../components/Work1";
import TextCarousel from "../ui/TextCarousel";
import Footer from "../components/Footer";
import { Circle } from "../ui/Circle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 3.6rem;

  @media (max-width: 1440px) {
    grid-template-columns: 1fr;
  }
`;

function Work() {
  return (
    <>
      <Section>
        <Container>
          <WorkLink2
            name="Oslo Bank"
            type="project"
            techStack="React, Tailwind CSS."
            border="borderRigth"
            border2="borderBottom"
          />
          <WorkLink2
            name="South Studio"
            type="work"
            techStack="React, Styled Components, Framer Motion."
            border2="borderBottom"
          />
          <WorkLink2
            name="NewBody"
            type="work"
            techStack="React, Tailwind CSS."
            border="borderRigth"
            border2="borderBottom"
          />
          <WorkLink2
            name="3xBet"
            type="project"
            techStack="React, TypeScript, Tailwind CSS, Framer Motion."
            border2="borderBottom"
          />
          <WorkLink2
            name="PizzaApp"
            type="project"
            techStack="Vanilla JavaScript"
            border="borderRigth"
          />
          <WorkLink2
            name="Ushuaia Visión"
            type="work"
            techStack="React, TypeScript, Styled Components."
          />
        </Container>
      </Section>

      <TextCarousel text2="archive" type="skils" />

      <Section>
        <Work1 />
        <Row type="bigger2">
          <Circle position="bottom">
            find out <br /> more
            <Span type="mleft">
              <FontAwesomeIcon icon={faArrowDownLong} />
            </Span>
          </Circle>
        </Row>
      </Section>

      <Footer />
    </>
  );
}

export default Work;
