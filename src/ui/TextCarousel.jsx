import styled, { css, keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const slide = keyframes`
from {
    transform: translateX(0);
}

to{
    transform: translateX(-100%);
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
`;

const TextSlide = styled.div`
  display: flex;
  animation: 45s ${slide} infinite linear;
`;

const Text = styled.p`
  color: white;
  font-size: 1.5rem;
  font-weight: 550;
  margin-right: 6rem;
  line-height: 1.4rem;
`;

const Span = styled.span`
  display: flex;

  ${(props) =>
    props.type === "mTop" &&
    css`
      margin-left: 0.3rem;
    `}
`;
function TextCarousel() {
  return (
    <Slide>
      <TextSlide>
        <Text>
          keep
          <Span>
            <FontAwesomeIcon icon={faCaretDown} />{" "}
            <Span type="mTop">going</Span>
          </Span>
        </Text>

        <Text>
          keep
          <Span>
            <FontAwesomeIcon icon={faCaretDown} />{" "}
            <Span type="mTop">going</Span>
          </Span>
        </Text>

        <Text>
          keep
          <Span>
            <FontAwesomeIcon icon={faCaretDown} />{" "}
            <Span type="mTop">going</Span>
          </Span>
        </Text>

        <Text>
          keep
          <Span>
            <FontAwesomeIcon icon={faCaretDown} />{" "}
            <Span type="mTop">going</Span>
          </Span>
        </Text>

        <Text>
          keep
          <Span>
            <FontAwesomeIcon icon={faCaretDown} />{" "}
            <Span type="mTop">going</Span>
          </Span>
        </Text>

        <Text>
          keep
          <Span>
            <FontAwesomeIcon icon={faCaretDown} />{" "}
            <Span type="mTop">going</Span>
          </Span>
        </Text>

        <Text>
          keep
          <Span>
            <FontAwesomeIcon icon={faCaretDown} />{" "}
            <Span type="mTop">going</Span>
          </Span>
        </Text>

        <Text>
          keep
          <Span>
            <FontAwesomeIcon icon={faCaretDown} />{" "}
            <Span type="mTop">going</Span>
          </Span>
        </Text>

        <Text>
          keep
          <Span>
            <FontAwesomeIcon icon={faCaretDown} />{" "}
            <Span type="mTop">going</Span>
          </Span>
        </Text>

        <Text>
          keep
          <Span>
            <FontAwesomeIcon icon={faCaretDown} />{" "}
            <Span type="mTop">going</Span>
          </Span>
        </Text>
      </TextSlide>

      <TextSlide>
        <Text>
          keep
          <Span>
            <FontAwesomeIcon icon={faCaretDown} />{" "}
            <Span type="mTop">going</Span>
          </Span>
        </Text>

        <Text>
          keep
          <Span>
            <FontAwesomeIcon icon={faCaretDown} />{" "}
            <Span type="mTop">going</Span>
          </Span>
        </Text>

        <Text>
          keep
          <Span>
            <FontAwesomeIcon icon={faCaretDown} />{" "}
            <Span type="mTop">going</Span>
          </Span>
        </Text>

        <Text>
          keep
          <Span>
            <FontAwesomeIcon icon={faCaretDown} />{" "}
            <Span type="mTop">going</Span>
          </Span>
        </Text>

        <Text>
          keep
          <Span>
            <FontAwesomeIcon icon={faCaretDown} />{" "}
            <Span type="mTop">going</Span>
          </Span>
        </Text>

        <Text>
          keep
          <Span>
            <FontAwesomeIcon icon={faCaretDown} />{" "}
            <Span type="mTop">going</Span>
          </Span>
        </Text>

        <Text>
          keep
          <Span>
            <FontAwesomeIcon icon={faCaretDown} />{" "}
            <Span type="mTop">going</Span>
          </Span>
        </Text>

        <Text>
          keep
          <Span>
            <FontAwesomeIcon icon={faCaretDown} />{" "}
            <Span type="mTop">going</Span>
          </Span>
        </Text>

        <Text>
          keep
          <Span>
            <FontAwesomeIcon icon={faCaretDown} />{" "}
            <Span type="mTop">going</Span>
          </Span>
        </Text>

        <Text>
          keep
          <Span>
            <FontAwesomeIcon icon={faCaretDown} />{" "}
            <Span type="mTop">going</Span>
          </Span>
        </Text>
      </TextSlide>
    </Slide>
  );
}

export default TextCarousel;
