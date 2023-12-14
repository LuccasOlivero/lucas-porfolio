import styled from "styled-components";
import { NavLink } from "react-router-dom";
import FramerMagnetic from "./FramerMagnetic";

import { Avatar } from "../ui/Avatar";
import { Paragraph } from "../ui/Paragraph";
import { Logo } from "../ui/Logo";
import { TextContainer } from "../ui/TextContainer";
import { Span } from "../ui/Span";
import { ABOUT_ME_TEXT } from "../Constants/constant";

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
          <Paragraph>{ABOUT_ME_TEXT}</Paragraph>
        </TextContainer>
        <NavLink to="about" onClick={() => window.scroll(0, 0)}>
          <FramerMagnetic>
            <Avatar
              whileTap={{
                scale: 0.98,
              }}
            />
          </FramerMagnetic>
        </NavLink>
      </Container>
    </>
  );
}

export default AboutMe1;
