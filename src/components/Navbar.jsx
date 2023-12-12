import styled from "styled-components";

import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger } from "@fortawesome/free-solid-svg-icons";

import { useToggleMenu } from "../Context/ToggleMenuContext";

import { Logo } from "../ui/Logo";

const StyledNav = styled.nav`
  width: 75vw;
  z-index: 999;
  height: 3.6rem;
  padding: 0 3rem;

  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0px -10px 30px var(--color-main);
  outline: 2px solid var(--color-main);
  background-color: #ffffff92;
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
  color: var(--color-main);
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  z-index: 999;
`;

function Navbar() {
  const { isOpenMenuToggle, setIsOpenMenuToggle } = useToggleMenu();

  function handleClickToggle() {
    window.scroll(0, 0);
  }

  return (
    <Container>
      <StyledNav>
        <NavLink to="/" onClick={handleClickToggle}>
          <Logo />
        </NavLink>
        <Header>since 2022</Header>
        <FontAwesomeIcon
          icon={faBurger}
          size="xl"
          color="#3076f1"
          onClick={() => setIsOpenMenuToggle(!isOpenMenuToggle)}
          style={{
            cursor: "pointer",
          }}
        />
      </StyledNav>
    </Container>
  );
}

export default Navbar;
