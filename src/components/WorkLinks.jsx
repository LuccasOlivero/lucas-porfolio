import { Header } from "../ui/Header";
import { Row } from "../ui/Row";
import { Span } from "../ui/Span";

function WorkLinks({ name, techStack, type }) {
  return (
    <Row type="bigger">
      <Span type="text3" as="div">
        <Header as="h2" type="medium">
          {name}
        </Header>
        <Span type="text4" as="p">
          {techStack}
        </Span>
      </Span>
      <Span type="text2" as="div">
        {type}
      </Span>
    </Row>
  );
}

export default WorkLinks;
