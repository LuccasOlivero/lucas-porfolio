import { Section } from "../ui/Section";
import styled from "styled-components";
import WorkLink2 from "../components/WorkLink2";

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
    <Section>
      <Container>
        <WorkLink2
          name="Oslo Bank"
          type="project"
          techStack="React, Tailwind CSS."
        />
        <WorkLink2
          name="South Studio"
          type="work"
          techStack="React, Styled Components, Framer Motion."
        />
        <WorkLink2
          name="NewBody"
          type="work"
          techStack="React, Tailwind CSS."
        />
        <WorkLink2
          name="3xBet"
          type="project"
          techStack="React, TypeScript, Tailwind CSS, Framer Motion."
        />
        <WorkLink2
          name="test"
          type="test"
          techStack="test test test test test"
        />
        <WorkLink2
          name="Ushuaia Visión"
          type="work"
          techStack="React, TypeScript, Styled Components."
        />
      </Container>
    </Section>
  );
}

export default Work;
