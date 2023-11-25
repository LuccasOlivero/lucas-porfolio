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
        <Span type="text5">HTML5, CSS3, JavaScript, TypeScript, Java.</Span>
      </Box>
      <Box>
        <Header type="min" as="p">
          tecnologies
          <Span type="text4">.02</Span>
        </Header>
        <Span type="text5">
          Git, Supabase, Framer Motion, Redux, TanStack Query, Next.js.
        </Span>
      </Box>
      <Box>
        <Header type="min" as="p">
          frameworks
          <Span type="text4">.03</Span>
        </Header>
        <Span type="text5">React, Angular, Spring, Tailwind CSS, Node.js.</Span>
      </Box>
    </Row>
  );
}

export default Skils;
