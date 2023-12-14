import { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";

import { Logo } from "../ui/Logo";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import FramerMagnetic from "./FramerMagnetic";
import { motion } from "framer-motion";

const StyledForm = styled.form`
  width: 44rem;
  height: 100%;

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

const Button = styled(motion.button)`
  width: 11rem;
  height: 11rem;
  margin: 3rem auto 2rem;
  border-radius: 50%;
  color: var(--color-secondary);
  border: 1px solid var(--color-secondary);

  display: flex;
  cursor: pointer;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: #494f9665;

  &::before {
    content: "";
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    border-radius: 50%;

    position: absolute;
    clip-path: circle(0% at 49% 0);
    transition: clip-path 0.3s ease-in;
    background-color: var(--color-secondary);
  }

  &:hover::before {
    clip-path: circle(100.4% at 51% 0);
  }

  &:hover {
    color: white;
    transition: color 0.3s ease-in;
  }

  @media (max-width: 1440px) {
    width: 8rem;
    height: 8rem;
  }

  @media (max-width: 768px) {
    width: 4.5rem;
    height: 4.5rem;
  }
`;

function Form() {
  const [isLoading, setIsLoading] = useState(false);
  const { handleSubmit, reset } = useForm();
  const form = useRef(null);

  async function submit() {
    try {
      setIsLoading(true);
      await emailjs
        .sendForm(
          "service_tig1875",
          "template_dy7lqtk",
          form.current,
          "aJJGUNBmIZNi_LrLb"
        )
        .then(() => {
          toast.success("your message has been send correctly");
          reset();
        });
    } catch (err) {
      toast.error(`something went wrong, please try again`);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit(submit)} ref={form}>
        <Label>
          <Logo /> what is your name?
        </Label>
        <Input
          type="text"
          name="user_name"
          placeholder="type your name"
          required
          disabled={isLoading}
        />
        <Label>
          <Logo /> what is your email?
        </Label>
        <Input
          type="email"
          name="user_email"
          placeholder="type your email"
          required
          disabled={isLoading}
        />
        <Label>
          <Logo /> what service are you looking for?
        </Label>
        <Input
          type="text"
          name="message"
          placeholder="type your type the service that you want"
          required
          disabled={isLoading}
        />
        <Label>
          <Logo /> your message
        </Label>
        <Input
          type="text"
          placeholder="I want to have a amazing website"
          required
          disabled={isLoading}
        />
        <FramerMagnetic>
          <Button
            type="submit"
            position="bottom"
            disabled={isLoading}
            whileTap={{
              scale: 0.95,
            }}
          >
            {isLoading ? "Sending..." : "Submit"}
          </Button>
        </FramerMagnetic>
      </StyledForm>
    </>
  );
}

export default Form;
