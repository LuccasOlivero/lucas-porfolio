import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import FramerMagnetic from "./FramerMagnetic";

import { Section } from "../ui/Section";
import { Header } from "../ui/Header";
import { Buttom } from "../ui/Buttom";
import { Span } from "../ui/Span";
import { Row } from "../ui/Row";
import { StyledNavLink } from "../ui/StyledNavLink";
import { EMAIL } from "../Constants/constant";

const StyledFooter = styled.footer`
  width: 100%;
  height: 65vh;

  position: absolute;
  background-color: var(--color-main);
  background-image: url(./background.jpg);
  background-size: cover;
  background-position: center;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  background-color: #3077f1c5;
`;

const LogosContact = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  @media (max-width: 440px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: inline-block;
    text-align: center;
  }
`;

const Link = styled.a`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: white;

  display: flex;
  cursor: pointer;
  position: absolute;
  align-items: center;
  justify-content: center;
`;

function Footer() {
  return (
    <StyledFooter>
      <Background />
      <Section type="secondary">
        <Header type="bigger">
          let&apos;s <br />
          talk
          <Span
            type="text6"
            initial={{
              translateY: "-20px",
              scale: 0.8,
            }}
            animate={{
              translateY: "0",
              scale: 1,
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <FontAwesomeIcon icon={faCaretDown} />
          </Span>
        </Header>

        <LogosContact>
          <FramerMagnetic>
            <StyledNavLink to="/contact" onClick={() => window.scroll(0, 0)}>
              <Buttom type="large">{EMAIL}</Buttom>
            </StyledNavLink>
          </FramerMagnetic>

          <FramerMagnetic>
            <Buttom type="small">
              <Link href="https://www.linkedin.com/in/lucas-olivero-319090264/">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </Link>
            </Buttom>
          </FramerMagnetic>

          <FramerMagnetic>
            <Buttom type="small">
              <Link href="https://github.com/LuccasOlivero">
                <FontAwesomeIcon icon={faGithub} />
              </Link>
            </Buttom>
          </FramerMagnetic>
        </LogosContact>

        <Row type="borderTop2">
          &copy; All rights reserved. Lucas Olivero {new Date().getFullYear()}.
        </Row>
      </Section>
    </StyledFooter>
  );
}

export default Footer;
