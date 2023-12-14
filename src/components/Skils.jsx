import { FRAMEWORKS, LANGUAGES, TECNOLOGIES } from "../Constants/constant";
import { Box } from "../ui/Box";
import { Header } from "../ui/Header";
import { Row } from "../ui/Row";
import { Span } from "../ui/Span";

function Skils() {
  return (
    <Row type="bigger3">
      <Box>
        <Header type="min" as="p">
          languages
          <Span type="text4">.01</Span>
        </Header>
        <Span type="text5">{LANGUAGES}</Span>
      </Box>

      <Box>
        <Header type="min" as="p">
          tecnologies
          <Span type="text4">.02</Span>
        </Header>
        <Span type="text5">{TECNOLOGIES}</Span>
      </Box>

      <Box>
        <Header type="min" as="p">
          frameworks
          <Span type="text4">.03</Span>
        </Header>
        <Span type="text5">{FRAMEWORKS}</Span>
      </Box>
    </Row>
  );
}

export default Skils;
