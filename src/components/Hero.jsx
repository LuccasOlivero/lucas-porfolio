import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";

import { Logo } from "../ui/Logo";
import { Header } from "../ui/Header";
import { Circle } from "../ui/Circle";
import { ContainerColumn } from "../ui/ContainerColumn";
import { TextContainer } from "../ui/TextContainer";
import FramerMagnetic from "./FramerMagnetic";
import { StyledNavLink } from "../ui/StyledNavLink";
import styled from "styled-components";

const Span = styled.span`
  position: absolute;
  padding-left: 0.5rem;
`;

function Hero() {
  return (
    <ContainerColumn>
      <TextContainer>
        <Header
          type="color-white"
          initial={{
            translateX: "-100%",
            scale: 0,
          }}
          animate={{
            translateX: "0",
            scale: 1,
          }}
          transition={{
            duration: 0.3,
            ease: "backInOut",
            delay: 0.15,
          }}
        >
          Lucas
          <motion.span
            initial={{
              translateY: "-300%",
            }}
            animate={{
              translateY: "0",
            }}
            transition={{
              delay: 0.8,
            }}
          >
            <FramerMagnetic>
              <StyledNavLink to="/about">
                <Circle position="top">about me</Circle>
              </StyledNavLink>
            </FramerMagnetic>
            <Logo
              size="bigger"
              initial={{
                rotate: "0deg",
              }}
              animate={{
                rotate: "10deg",
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
            />
          </motion.span>
        </Header>

        <Header
          type="color-white"
          initial={{
            translateY: "200%",
            scale: 0,
          }}
          animate={{
            translateY: "0",
            scale: 1,
          }}
          transition={{
            duration: 0.3,
            ease: "backInOut",
            delay: 0.5,
          }}
        >
          <Span>WebDev</Span>
          <FramerMagnetic>
            <StyledNavLink to="work">
              <Circle position="middle">work</Circle>
            </StyledNavLink>
          </FramerMagnetic>
        </Header>
      </TextContainer>

      {/* <Circle
        position="bottom"
        whileTap={{
          scale: 0.95,
        }}
      >
        find out <br /> more
        <Span type="mleft">
          <FontAwesomeIcon icon={faArrowDownLong} />
        </Span>
      </Circle> */}
    </ContainerColumn>
  );
}

export default Hero;
