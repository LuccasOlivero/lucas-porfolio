import { Avatar } from "../ui/Avatar";
import { Paragraph } from "../ui/Paragraph";
import { Logo } from "../ui/Logo";
import { TextContainer } from "../ui/TextContainer";
import { Span } from "../ui/Span";

function AboutMe1() {
  return (
    <>
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
    </>
  );
}

export default AboutMe1;
