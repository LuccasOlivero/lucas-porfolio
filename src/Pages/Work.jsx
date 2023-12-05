import WorkLinks from "../components/WorkLinks";
import { Section } from "../ui/Section";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
  margin-top: 10rem;

  @media (max-width: 1440px) {
    grid-template-columns: 1fr;
  }
`;

function Work() {
  return (
    <Section>
      <Container>
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
          name="NewBody"
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
      </Container>
    </Section>
  );
}

export default Work;
