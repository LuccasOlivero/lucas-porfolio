import styled from "styled-components";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import { Section } from "../ui/Section";
import { Header } from "../ui/Header";
import { Buttom } from "../ui/Buttom";
import { Span } from "../ui/Span";
import { Row } from "../ui/Row";
import FramerMagnetic from "./FramerMagnetic";

const StyledFooter = styled.footer`
  position: absolute;
  width: 100%;
  height: 65vh;
  background-color: var(--color-main);
  background-image: url(./background.jpg);
  background-size: cover;
  background-position: center;
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #3077f1c5;
`;

const LogosContact = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  @media (max-width: 440px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: inline-block;
    text-align: center;
  }
`;

const Link = styled.a`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: white;
  cursor: pointer;
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
            <Buttom type="large">lucas.dev@gmail.com</Buttom>
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
          &copy; All rights reserved. Luccas Olivero {new Date().getFullYear()}.
        </Row>
      </Section>
    </StyledFooter>
  );
}

export default Footer;
