import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Logo } from "../ui/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger } from "@fortawesome/free-solid-svg-icons";

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
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 900;
  color: white;
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
  background-color: rgba(45, 45, 153, 0.664);
`;

const Section = styled.div`
  display: flex;
  height: 100%;
  padding: 0 4rem;
  border-left: 2px solid white;
  border-right: 2px solid white;
  display: flex;
  align-items: center;
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
  position: absolute;
  left: 0;
  display: flex;
  width: 23rem;
  height: 100%;
  flex-direction: column;
  align-items: center;
  border-right: 2px solid white;
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
        <Column></Column>
      </Section>
    </Test>
  );
}

export default MenuToggle;
