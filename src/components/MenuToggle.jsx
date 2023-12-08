import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import { Logo } from "../ui/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger } from "@fortawesome/free-solid-svg-icons";
import ContactInfo from "./ContactInfo";

const StyledNav = styled.nav`
  width: 75vw;
  z-index: 999;
  height: 3.6rem;
  padding: 0 3rem;

  border-bottom: 2px solid white;
  border-right: 2px solid white;
  border-left: 2px solid white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;

  @media (max-width: 768px) {
    padding: 0 2rem;
  }

  @media (max-width: 440px) {
    padding: 0 1rem;
  }
`;

const Header = styled.h2`
  font-size: 1rem;
  font-weight: 900;
  color: white;
  position: relative;

  ${(props) =>
    props.type === "text-black" &&
    css`
      display: flex;
      align-items: end;
      color: var(--color-third);
      font-size: 8rem;
      letter-spacing: 10px;
      padding-left: 2rem;
      border-bottom: 2px solid var(--color-third);
    `}
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 3.6rem;
  justify-content: center;
`;

const Test = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1000;
  position: absolute;
  background-color: #3077f1d2;
  backdrop-filter: blur(10px);
`;

const Section = styled.div`
  display: flex;
  height: 100%;
  padding: 0 4rem;
  border-left: 2px solid white;
  border-right: 2px solid white;
  display: flex;
  gap: 2rem;
  align-items: end;
  flex-direction: column;
  justify-content: center;
  width: 75vw;
  margin: 0 auto;
  position: relative;

  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`;

const Column = styled.div`
  left: 0;
  top: 0;
  width: 26rem;
  height: 100%;
  padding: 4rem;
  margin: 0 auto;
  border-right: 2px solid white;

  position: absolute;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Span = styled.span`
  font-size: 1.5rem;
  padding-bottom: 2.55rem;
`;

function MenuToggle() {
  return (
    <Test>
      <Container>
        <StyledNav>
          <NavLink to="/">
            <Logo size="white" />
          </NavLink>
          <Header>since 2022</Header>
          <FontAwesomeIcon icon={faBurger} size="xl" color="white" />
        </StyledNav>
      </Container>

      <Section>
        <Column>
          <ContactInfo />
        </Column>
        <Header type="text-black">
          <Span type="text2">.01</Span>
          Work
        </Header>
        <Header type="text-black">
          <Span type="text2">.02</Span>About me
        </Header>
        <Header type="text-black">
          <Span type="text2">.03</Span>Contact
        </Header>
      </Section>
    </Test>
  );
}

export default MenuToggle;
