import styled from "styled-components";
import { Section } from "./Section";
import { Header } from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Buttom } from "./Buttom";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { Span } from "./Span";
import { Row } from "./Row";

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
`;

function Footer() {
  return (
    <StyledFooter>
      <Background />
      <Section type="secondary">
        <Header type="bigger">
          let&apos;s <br />
          talk
          <Span type="text6">
            <FontAwesomeIcon icon={faCaretDown} />
          </Span>
        </Header>

        <LogosContact>
          <Buttom type="small">lucas.dev@gmail.com</Buttom>
          <Buttom type="small">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </Buttom>
          <Buttom type="small">
            <FontAwesomeIcon icon={faGithub} />
          </Buttom>

          <Row type="borderTop2">
            &copy; Luccas Olivero. All rights reserved{" "}
            {new Date().getFullYear()}
          </Row>
        </LogosContact>
      </Section>
    </StyledFooter>
  );
}

export default Footer;
