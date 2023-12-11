import FramerMagnetic from "./FramerMagnetic";
import { motion } from "framer-motion";

import { Logo } from "../ui/Logo";
import { Header } from "../ui/Header";
import { Circle } from "../ui/Circle";
import { ContainerColumn } from "../ui/ContainerColumn";
import { TextContainer } from "../ui/TextContainer";
import { StyledNavLink } from "../ui/StyledNavLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const Span = styled.span`
  position: absolute;
`;

const ContainerRigth = styled.div`
  top: -1rem;
  width: 50%;
  height: 100%;

  display: flex;
  position: relative;
  justify-content: center;
`;

function Hero() {
  return (
    <ContainerColumn>
      <TextContainer>
        <Header
          type="color-main"
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
          type="test"
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
          <ContainerRigth>
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
          </ContainerRigth>
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
        <FontAwesomeIcon icon={faArrowDownLong} />
      </Circle>
    </ContainerColumn>
  );
}

export default Hero;
