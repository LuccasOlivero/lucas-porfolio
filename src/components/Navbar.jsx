import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3.6rem;
  padding: 0 3.6rem;

  backdrop-filter: blur(1rem);
  background-color: var(--color-background);
  outline: 2px solid var(--color-main);
`;

const Logo = styled.img`
  width: 2.3rem;
  height: 2.6rem;
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
      <Logo src="/logo.svg" alt="" />
      <Header>since 2022</Header>
      <FontAwesomeIcon icon={faBurger} size="xl" color="#3076f1" />
    </StyledNav>
  );
}

export default Navbar;
