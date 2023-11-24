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
          Hi 👋 Im Lucas Olivero from Brazil. Experienced Webflow & WordPress
          Developer with 5 years of expertise, dedicated to delivering
          high-quality solutions. Strong leadership skills, ensuring timely and
          successful project completion. Passionate about creating exceptional
          websites that exceed client expectations. Committed to providing an
          outstanding user experience.
        </Paragraph>
      </TextContainer>

      <Avatar />
    </>
  );
}

export default AboutMe1;
