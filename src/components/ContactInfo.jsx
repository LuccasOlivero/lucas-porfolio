import { Header } from "../ui/Header";
import { Span } from "../ui/Span";

function ContactInfo({ color }) {
  return (
    <>
      <Header color={color}>
        email
        <Span type="mleft2">lucas.dev@gmail.com</Span>
      </Header>
      <Header color={color}>
        linkedin
        <Span type="mleft2">linkedin.com/in/lucas-olivero</Span>
      </Header>
      <Header color={color}>
        twitter / x<Span type="mleft2">@luccasOlivero</Span>
      </Header>
      <Header color={color}>
        github
        <Span type="mleft2">github.com/LuccasOlivero</Span>
      </Header>
    </>
  );
}

export default ContactInfo;
