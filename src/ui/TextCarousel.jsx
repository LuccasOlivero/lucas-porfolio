import styled, { css, keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Span } from "./Span";

const progressGrow = keyframes`
  from{
    transform: translateX(calc(-100% + 100vw));
  }
  to{
    transform: translateX(calc(100% - 100vw));
    }
`;

const Slide = styled.div`
  position: relative;
  background-image: linear-gradient(#495096, #3076f1);
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;

  ${(props) =>
    props.type === "skils" &&
    css`
      justify-content: center;
    `}

  @media(max-width: 1024px) {
    height: 3rem;
  }
`;

const TextSlide = styled.div`
  position: absolute;
  display: flex;
  animation: ${progressGrow} auto linear;
  animation-timeline: scroll(root block);
`;

const Text = styled.p`
  color: white;
  font-size: 1.5rem;
  font-weight: 550;
  margin-right: 6rem;
  line-height: 1.4rem;

  @media (max-width: 1024px) {
    font-size: 1rem;
  }
`;

function TextCarousel({ type, text1, text2 }) {
  return (
    <Slide type={type}>
      <TextSlide>
        <Text>
          {text1}
          <Span>
            <FontAwesomeIcon icon={faCaretDown} />
            <Span type="mt">{text2}</Span>
          </Span>
        </Text>

        <Text>
          {text1}
          <Span>
            <FontAwesomeIcon icon={faCaretDown} />
            <Span type="mt">{text2}</Span>
          </Span>
        </Text>

        <Text>
          {text1}
          <Span>
            <FontAwesomeIcon icon={faCaretDown} />
            <Span type="mt">{text2}</Span>
          </Span>
        </Text>

        <Text>
          {text1}
          <Span>
            <FontAwesomeIcon icon={faCaretDown} />
            <Span type="mt">{text2}</Span>
          </Span>
        </Text>

        <Text>
          {text1}
          <Span>
            <FontAwesomeIcon icon={faCaretDown} />
            <Span type="mt">{text2}</Span>
          </Span>
        </Text>

        <Text>
          {text1}
          <Span>
            <FontAwesomeIcon icon={faCaretDown} />
            <Span type="mt">{text2}</Span>
          </Span>
        </Text>

        <Text>
          {text1}
          <Span>
            <FontAwesomeIcon icon={faCaretDown} />
            <Span type="mt">{text2}</Span>
          </Span>
        </Text>

        <Text>
          {text1}
          <Span>
            <FontAwesomeIcon icon={faCaretDown} />
            <Span type="mt">{text2}</Span>
          </Span>
        </Text>

        <Text>
          {text1}
          <Span>
            <FontAwesomeIcon icon={faCaretDown} />
            <Span type="mt">{text2}</Span>
          </Span>
        </Text>

        <Text>
          {text1}
          <Span>
            <FontAwesomeIcon icon={faCaretDown} />
            <Span type="mt">{text2}</Span>
          </Span>
        </Text>

        <Text>
          {text1}
          <Span>
            <FontAwesomeIcon icon={faCaretDown} />
            <Span type="mt">{text2}</Span>
          </Span>
        </Text>

        <Text>
          {text1}
          <Span>
            <FontAwesomeIcon icon={faCaretDown} />
            <Span type="mt">{text2}</Span>
          </Span>
        </Text>

        <Text>
          {text1}
          <Span>
            <FontAwesomeIcon icon={faCaretDown} />
            <Span type="mt">{text2}</Span>
          </Span>
        </Text>

        <Text>
          {text1}
          <Span>
            <FontAwesomeIcon icon={faCaretDown} />
            <Span type="mt">{text2}</Span>
          </Span>
        </Text>
      </TextSlide>
    </Slide>
  );
}

export default TextCarousel;
