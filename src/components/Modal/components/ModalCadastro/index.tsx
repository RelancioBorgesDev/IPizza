import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  ButtonCadastrar,
  CloseButton,
  Description,
  ErrorText,
  FormCadastro,
  FormContent,
  InputContainer,
  LeftImage,
  ModalContent,
  Title,
} from "./style";
import { X } from "phosphor-react";
import kitchen from "../../../../../public/kitchen.jpg";

export default function ModalCadastro() {
  return (
    <ModalContent>
      <FormCadastro>
        <LeftImage src={kitchen} alt='Imagem cozinha' />
        <FormContent>
          <Title>Cadastro</Title>
          <Description>Faça seu cadastro para entrar no site</Description>
          <InputContainer>
            <input type='text' placeholder='Digite seu nome' />
            <ErrorText></ErrorText>
            <input type='text' placeholder='Digite seu email' />
            <ErrorText></ErrorText>
            <input type='text' placeholder='Confirme seu email' />
            <ErrorText></ErrorText>
            <input type='text' placeholder='Digite sua senha' />
            <ErrorText></ErrorText>
            <input type='text' placeholder='Confirme sua senha' />
            <ErrorText></ErrorText>
          </InputContainer>
          <Dialog.Close asChild>
            <CloseButton>
              <X size={24} />
            </CloseButton>
          </Dialog.Close>
          <Dialog.Close asChild>
            <ButtonCadastrar>Cadastrar</ButtonCadastrar>
          </Dialog.Close>
        </FormContent>
      </FormCadastro>
    </ModalContent>
  );
}
