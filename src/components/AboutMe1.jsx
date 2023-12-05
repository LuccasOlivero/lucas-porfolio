import styled from "styled-components";

import { Avatar } from "../ui/Avatar";
import { Paragraph } from "../ui/Paragraph";
import { Logo } from "../ui/Logo";
import { TextContainer } from "../ui/TextContainer";
import { Span } from "../ui/Span";
import { useMotionValue, useSpring, useTransform } from "framer-motion";

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
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 1;
    const yPct = mouseY / height - 1;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

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

        <Avatar
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          whileTap={{
            scale: 0.98,
          }}
          style={{
            rotateY,
            rotateX,
            transformStyle: "preserve-3d",
          }}
        />
      </Container>
    </>
  );
}

export default AboutMe1;
