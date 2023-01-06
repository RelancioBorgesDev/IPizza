import Image from "next/image";
import React from "react";
import {
  ButtonLogar,
  CloseButton,
  Description,
  ErrorText,
  FormContainer,
  LoginModalContainer,
  RightImage,
  Title,
} from "./style";
import * as Dialog from "@radix-ui/react-dialog";
import login from "/public/login.jpg";
import { X } from "phosphor-react";

export default function ModalLogin() {
  return (
    <LoginModalContainer>
      <FormContainer action=''>
        <Title>Login</Title>
        <Description>Faça seu login para entrar no site</Description>
        <input type='email' placeholder='Digite seu email' />
        <ErrorText></ErrorText>
        <input type='password' placeholder='Digite sua senha' />
        <ErrorText></ErrorText>
        <ButtonLogar type="submit">Logar</ButtonLogar>
      </FormContainer>
      <RightImage src={login} alt='imagem de cover do login' />
      <Dialog.Close asChild>
        <CloseButton>
          <X size={24} />
        </CloseButton>
      </Dialog.Close>
    </LoginModalContainer>
  );
}
