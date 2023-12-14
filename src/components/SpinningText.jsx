import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const spin = keyframes`
0% {
    transform: rotate(0deg);
}
100% {
    transform: rotate(360deg);
}
`;

const Container = styled(motion.div)`
  left: 4vw;
  bottom: 4rem;
  width: 250px;
  height: 250px;
  z-index: 1000;
  border-radius: 50%;

  display: flex;
  cursor: pointer;
  position: fixed;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const TextWrapper = styled.div`
  width: 100%;
  height: 100%;

  color: black;
  border-radius: 50%;
  position: absolute;
  text-transform: uppercase;
  animation: ${spin} 45s linear infinite;
`;

const Text = styled.span`
  position: absolute;

  left: 50%;
  font-size: 1rem;
  transform-origin: 0 125px;
`;

function SpinningText({ text, children }) {
  const length = text.length;
  const deg = 360 / length;

  return (
    <NavLink to="/contact" onClick={() => window.scroll(0, 0)}>
      <Container
        whileTap={{
          scale: 0.95,
        }}
      >
        <TextWrapper>
          <p>
            {text.split("").map((letter, i) => (
              <Text key={i} style={{ transform: `rotate(${deg * i}deg)` }}>
                {letter}
              </Text>
            ))}
          </p>
        </TextWrapper>
        {children}
      </Container>
    </NavLink>
  );
}

export default SpinningText;
