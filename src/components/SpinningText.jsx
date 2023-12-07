import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
0% {
    transform: rotate(0deg);
}
100% {
    transform: rotate(360deg);
}
`;

const Container = styled(motion.div)`
  position: fixed;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 6vw;
  bottom: 5rem;
  cursor: pointer;
  z-index: 1000;

  @media (max-width: 768px) {
    display: none;
  }
`;

const TextWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  animation: ${spin} 45s linear infinite;
  color: black;
  text-transform: uppercase;
`;

const Text = styled.span`
  position: absolute;
  font-size: 1rem;
  width: 100%;
  height: 100%;
  left: 50%;
  transform-origin: 0 100px;
`;

function SpinningText({ text, children }) {
  const length = text.length;
  const deg = 360 / length;

  return (
    <NavLink to="contact">
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
