import styled, { keyframes } from "styled-components";

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
  left: 5rem;
  bottom: 5rem;
  transition: all 0.1s ease-in;

  @media (max-width: 400px) {
    display: none;
  }

  &:hover {
    transition: all 0.1s ease-in;
    transform: scale(1.1);
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
  font-size: 1.2rem;
  top: 0;
  left: 53%;
  transform-origin: 0 5rem;
`;

function SpinningText({ text, children }) {
  const length = text.length;
  const deg = 360 / length;

  return (
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
  );
}

export default SpinningText;
