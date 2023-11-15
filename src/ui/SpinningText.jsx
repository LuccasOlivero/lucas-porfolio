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
  position: absolute;
  width: 13rem;
  height: 13rem;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  left: 5rem;
  bottom: 5rem;

  @media (max-width: 400px) {
    display: none;
  }
`;

const TextWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  animation: ${spin} 50s linear infinite;
  color: black;
  text-transform: uppercase;
  top: -0.5rem;
`;

const Text = styled.span`
  position: absolute;
  top: 0;
  left: 50%;
  transform-origin: 0 7rem;
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
