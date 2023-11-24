import { Box } from "../ui/Box";
import { Header } from "../ui/Header";
import { Row } from "../ui/Row";
import { Span } from "../ui/Span";

function Skils() {
  return (
    <Row type="bigger3">
      <Box>
        <Header type="min" as="p">
          lenguajes
          <Span type="text4">.01</Span>
        </Header>
        <Span type="text5">Java, HTML5, CSS3 and JavaScript, TypeScript</Span>
      </Box>
      <Box>
        <Header type="min" as="p">
          tecnologies
          <Span type="text4">.02</Span>
        </Header>
        <Span type="text5">
          Git, SQL, Supabase, Framer Motion Supabase, Framer Motion
        </Span>
      </Box>
      <Box>
        <Header type="min" as="p">
          frameworks
          <Span type="text4">.03</Span>
        </Header>
        <Span type="text5">React, MySQL, Jquery, SCSS/SASS and Bootstrap</Span>
      </Box>
    </Row>
  );
}

export default Skils;
