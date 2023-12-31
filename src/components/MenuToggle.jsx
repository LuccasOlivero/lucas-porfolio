import styled, { css } from "styled-components";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurger } from "@fortawesome/free-solid-svg-icons";

import { useToggleMenu } from "../Context/ToggleMenuContext";

import ContactInfo from "./ContactInfo";
import { Logo } from "../ui/Logo";
import { StyledNavLink } from "../ui/StyledNavLink";

const StyledNav = styled.nav`
  width: 75vw;
  z-index: 999;
  height: 3.6rem;
  padding: 0 3rem;

  display: flex;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  border-left: 2px solid white;
  border-right: 2px solid white;
  border-bottom: 2px solid white;

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
  text-transform: uppercase;

  ${(props) =>
    props.type === "text-black" &&
    css`
      font-size: 5.5vw;
      padding-left: 2rem;
      letter-spacing: 10px;
      width: 40vw;

      display: flex;
      align-items: end;
      justify-content: space-between;
      color: var(--color-third);
      border-bottom: 2px solid var(--color-third);
      transition: color 0.2s ease-in;

      &:hover {
        color: white;
      }

      &::after {
        content: "";
        left: 0;
        width: 0;
        bottom: -2px;
        height: 2px;
        width: 0%;
        position: absolute;
        background-color: white;
        transition: width 0.2s ease-in;
      }

      &:hover::after {
        content: "";
        width: 100%;
      }
    `}
`;

const ContainerNav = styled.div`
  display: flex;
  width: 100%;
  height: 3.6rem;
  justify-content: center;
`;

const Container = styled(motion.div)`
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1000;

  position: fixed;
  background-color: #3077f1b6;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;

const Section = styled.div`
  gap: 2rem;
  width: 75vw;
  height: 100%;
  margin: 0 auto;
  padding: 0 4rem;

  display: flex;
  align-items: end;
  position: relative;
  flex-direction: column;
  justify-content: center;
  border-left: 2px solid white;
  border-right: 2px solid white;

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
  const { isOpenMenuToggle, setIsOpenMenuToggle } = useToggleMenu();

  function handleClickMenu() {
    window.scroll(0, 0);
    setIsOpenMenuToggle(!isOpenMenuToggle);
  }

  return createPortal(
    <Container
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: 0.3,
      }}
    >
      <ContainerNav>
        <StyledNav>
          <StyledNavLink to="/">
            <Logo
              size="white"
              onClick={() => {
                setIsOpenMenuToggle(!isOpenMenuToggle);
                window.scroll(0, 0);
              }}
            />
          </StyledNavLink>
          <Header>since 2022</Header>
          <FontAwesomeIcon
            icon={faBurger}
            size="xl"
            color="white"
            onClick={() => setIsOpenMenuToggle(!isOpenMenuToggle)}
            style={{
              cursor: "pointer",
            }}
          />
        </StyledNav>
      </ContainerNav>

      <Section>
        <Column>
          <ContactInfo color="third" />
        </Column>

        <StyledNavLink to="/work" onClick={handleClickMenu}>
          <Header type="text-black">
            <Span type="text2">.01</Span>
            Work
          </Header>
        </StyledNavLink>

        <StyledNavLink to="/about" onClick={handleClickMenu}>
          <Header type="text-black">
            <Span type="text2">.02</Span>About me
          </Header>
        </StyledNavLink>

        <StyledNavLink to="/contact" onClick={handleClickMenu}>
          <Header type="text-black">
            <Span type="text2">.03</Span>Contact
          </Header>
        </StyledNavLink>
      </Section>
    </Container>,
    document.body
  );
}

export default MenuToggle;
