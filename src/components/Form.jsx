import { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

import { Logo } from "../ui/Logo";
import toast from "react-hot-toast";

const StyledForm = styled.form`
  width: 44rem;
  height: 100%;
  margin-bottom: 3rem;

  display: flex;
  flex-direction: column;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  height: 3rem;

  border: none;
  text-decoration: none;
  outline: none;
  border-bottom: 2px solid var(--color-secondary-blur);
`;

const Label = styled.label`
  letter-spacing: 3px;
  padding-top: 4rem;
  font-size: 1.5rem;

  display: flex;
  align-items: center;
  color: var(--color-main);
  text-transform: uppercase;
`;

function Form() {
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef(null);

  async function submit() {
    try {
      setIsLoading(true);
      await emailjs
        .sendForm(
          "service_tig1875",
          "template_gpuvigi",
          form.current,
          "aJJGUNBmIZNi_LrLb"
        )
        .then(() => toast("nice, your message has been send"));
      setIsLoading(false);
    } catch (err) {
      toast(`something went wrong ${err}`);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <StyledForm onSubmit={submit} ref={form}>
      <Label>
        <Logo /> what is your name?
      </Label>
      <Input type="text" placeholder="type your name" />
      <Label>
        <Logo /> what is your email?
      </Label>
      <Input type="email" placeholder="type your email" />
      <Label>
        <Logo /> what service are you looking for?
      </Label>
      <Input
        type="text"
        placeholder="type your type the service that you want"
      />
      <Label>
        <Logo /> your message
      </Label>
      <Input type="text" placeholder="I want to have a amazing website" />
    </StyledForm>
  );
}

export default Form;
