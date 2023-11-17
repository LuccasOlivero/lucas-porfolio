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

const Container = styled.div`
  position: fixed;
  width: 9rem;
  height: 9rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  left: 6vw;
  bottom: 5rem;
  cursor: pointer;

  @media (max-width: 400px) {
    display: none;
  }
`;

const TextWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  animation: ${spin} 80s linear infinite;
  color: black;
  text-transform: uppercase;
  top: -0.5rem;
`;

const Text = styled.span`
  position: absolute;
  font-size: 1rem;
  top: 0;
  left: 53%;
  transform-origin: 0 5rem;
`;

function SpinningText({ text, children }) {
  const length = text.length;
  const deg = 360 / length;

  return (
    <motion.div
    // whileHover={{ scale: 1.05 }}
    // whileTap={{ scale: 1 }}
    // transition={{ type: "spring", stiffness: 350, damping: 10 }}
    >
      <Container>
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
    </motion.div>
  );
}

export default SpinningText;
