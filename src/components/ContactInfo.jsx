import { Header } from "../ui/Header";
import { Span } from "../ui/Span";
import { StyledNavLink } from "../ui/StyledNavLink";

function ContactInfo({ color }) {
  return (
    <>
      <Header color={color}>
        <StyledNavLink to="/contact">
          email
          <Span type="mleft2">lucas.dev@gmail.com</Span>
        </StyledNavLink>
      </Header>
      <Header color={color}>
        <StyledNavLink to="https://www.linkedin.com/in/lucas-olivero-319090264/">
          linkedin
          <Span type="mleft2">linkedin.com/in/lucas-olivero</Span>
        </StyledNavLink>
      </Header>
      <Header color={color}>
        <StyledNavLink to="https://twitter.com/luccasolivero">
          twitter / x<Span type="mleft2">@luccasOlivero</Span>
        </StyledNavLink>
      </Header>
      <Header color={color}>
        <StyledNavLink to="https://github.com/LuccasOlivero">
          github
          <Span type="mleft2">github.com/LuccasOlivero</Span>
        </StyledNavLink>
      </Header>
    </>
  );
}

export default ContactInfo;
