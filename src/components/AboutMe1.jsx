import styled from "styled-components";

import FramerMagnetic from "./FramerMagnetic";

import { Avatar } from "../ui/Avatar";
import { Paragraph } from "../ui/Paragraph";
import { Logo } from "../ui/Logo";
import { TextContainer } from "../ui/TextContainer";
import { Span } from "../ui/Span";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 1440px) {
    flex-direction: column;
    justify-content: center;
    height: 100%;
    row-gap: 1.4rem;
  }
`;

function AboutMe1() {
  return (
    <>
      <Container>
        <TextContainer type="width">
          <Span type="text">
            <Logo />
            about me
          </Span>

          <Paragraph>
            👋 Hi, I&apos;m Lucas Olivero, a Frontend Developer from Argentina
            with 1 year of expertise. Specializing in React and experienced with
            Angular, I&apos;m dedicated to delivering high-quality solutions.
            Passionate about crafting exceptional websites that exceed client
            expectations, I am committed to providing an outstanding user
            experience.
          </Paragraph>
        </TextContainer>

        <FramerMagnetic>
          <Avatar
            whileTap={{
              scale: 0.98,
            }}
          />
        </FramerMagnetic>
      </Container>
    </>
  );
}

export default AboutMe1;
