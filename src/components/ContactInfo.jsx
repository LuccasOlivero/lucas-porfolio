import { Header } from "../ui/Header";
import { Span } from "../ui/Span";

function ContactInfo() {
  return (
    <>
      <Header type="min3white">
        email
        <Span type="mleft2">lucas.dev@gmail.com</Span>
      </Header>
      <Header type="min3white">
        linkedin
        <Span type="mleft2">linkedin.com/in/lucas-olivero</Span>
      </Header>
      <Header type="min3white">
        twitter / x<Span type="mleft2">@luccasOlivero</Span>
      </Header>
      <Header type="min3white">
        github
        <Span type="mleft2">github.com/LuccasOlivero</Span>
      </Header>
    </>
  );
}

export default ContactInfo;
