import { Avatar } from "../ui/Avatar";
import { Paragraph } from "../ui/Paragraph";
import { Logo } from "../ui/Logo";
import { TextContainer } from "../ui/TextContainer";
import { Span } from "../ui/Span";
import styled from "styled-components";

const Test = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    row-gap: 2rem;
  }
`;

function AboutMe1() {
  return (
    <>
      <Test>
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

        <Avatar />
      </Test>
    </>
  );
}

export default AboutMe1;
