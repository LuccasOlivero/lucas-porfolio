import { EMAIL, GITHUB, LINKEDIN, TWITTER } from "../Constants/constant";
import { Header } from "../ui/Header";
import { Span } from "../ui/Span";
import { StyledNavLink } from "../ui/StyledNavLink";

function ContactInfo({ color }) {
  return (
    <>
      <Header color={color}>
        <StyledNavLink to="/contact">
          email
          <Span type="mleft2">{EMAIL}</Span>
        </StyledNavLink>
      </Header>
      <Header color={color}>
        <StyledNavLink to="https://www.linkedin.com/in/lucas-olivero-319090264/">
          linkedin
          <Span type="mleft2">{LINKEDIN}</Span>
        </StyledNavLink>
      </Header>
      <Header color={color}>
        <StyledNavLink to="https://twitter.com/luccasolivero">
          twitter / x<Span type="mleft2">{TWITTER}</Span>
        </StyledNavLink>
      </Header>
      <Header color={color}>
        <StyledNavLink to="https://github.com/LuccasOlivero">
          github
          <Span type="mleft2">{GITHUB}</Span>
        </StyledNavLink>
      </Header>
    </>
  );
}

export default ContactInfo;
