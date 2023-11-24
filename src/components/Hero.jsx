import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";

import { ContainerColumn } from "../ui/ContainerColumn";
import { Header } from "../ui/Header";
import { Logo } from "../ui/Logo";
import { Circle } from "../ui/Circle";
import { TextContainer } from "../ui/TextContainer";
import { Span } from "../ui/Span";

function Hero() {
  return (
    <ContainerColumn>
      <TextContainer>
        <Header type="margin">
          Lucas
          <Logo size="bigger" />
        </Header>
        <Header as="h2">WebDev</Header>
        <Circle
          position="top"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
        >
          about me
        </Circle>
        <Circle
          position="middle"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 1 }}
        >
          work
        </Circle>
      </TextContainer>

      <Circle position="bottom">
        find out <br /> more
        <Span type="mleft">
          <FontAwesomeIcon icon={faArrowDownLong} />
        </Span>
      </Circle>
    </ContainerColumn>
  );
}

export default Hero;
