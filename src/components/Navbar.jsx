import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { Logo } from "../ui/Logo";

const StyledNav = styled.nav`
  width: 100%;
  z-index: 100;
  height: 3.6rem;
  padding: 0 3rem;

  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0px -10px 30px var(--color-main);
  border-bottom: 2px solid var(--color-main);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;

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
  color: var(--color-main);
`;

function Navbar() {
  return (
    <StyledNav>
      <Logo />
      <Header>since 2022</Header>
      <FontAwesomeIcon icon={faBurger} size="xl" color="#3076f1" />
    </StyledNav>
  );
}

export default Navbar;
