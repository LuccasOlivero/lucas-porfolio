import styled from "styled-components";
import { motion } from "framer-motion";
import FramerMagnetic from "./FramerMagnetic";

import { Logo } from "../ui/Logo";
import { Header } from "../ui/Header";
import { Circle } from "../ui/Circle";
import { ContainerColumn } from "../ui/ContainerColumn";
import { TextContainer } from "../ui/TextContainer";
import { StyledNavLink } from "../ui/StyledNavLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";

const Span = styled.span`
  position: absolute;
  right: 3.5rem;
  bottom: 7rem;
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
                <Circle
                  position="top"
                  initial={{
                    opacity: 0,
                    scale: 0,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    delay: 1.3,
                  }}
                >
                  about me
                </Circle>
              </StyledNavLink>
            </FramerMagnetic>
            <Logo size="bigger" />
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
              <Circle
                position="middle"
                initial={{
                  opacity: 0,
                  scale: 0,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  delay: 1.3,
                }}
              >
                work
              </Circle>
            </StyledNavLink>
          </FramerMagnetic>
        </Header>
      </TextContainer>

      <Circle
        position="bottom"
        whileTap={{
          scale: 0.95,
        }}
        initial={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          delay: 1.3,
        }}
      >
        find out <br /> more
        <Span type="mleft">
          <FontAwesomeIcon icon={faArrowDownLong} />
        </Span>
      </Circle>
    </ContainerColumn>
  );
}

export default Hero;
