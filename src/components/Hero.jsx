import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDownLong } from "@fortawesome/free-solid-svg-icons";

import { Logo } from "../ui/Logo";
import { Span } from "../ui/Span";
import { Header } from "../ui/Header";
import { Circle } from "../ui/Circle";
import { ContainerColumn } from "../ui/ContainerColumn";
import { TextContainer } from "../ui/TextContainer";

function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 1;
    const yPct = mouseY / height - 1;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <ContainerColumn>
      <TextContainer>
        <Header
          type="margin"
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
          type="margin"
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
          WebDev
        </Header>

        <NavLink to="/about">
          <Circle
            position="top"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            whileTap={{
              scale: 0.95,
            }}
            style={{
              rotateY,
              rotateX,
              transformStyle: "preserve-3d",
            }}
          >
            about me
          </Circle>
        </NavLink>

        <NavLink to="work">
          <Circle
            position="middle"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            whileTap={{
              scale: 0.95,
            }}
            style={{
              rotateY,
              rotateX,
              transformStyle: "preserve-3d",
            }}
          >
            work
          </Circle>
        </NavLink>
      </TextContainer>

      <Circle
        position="bottom"
        whileTap={{
          scale: 0.95,
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
