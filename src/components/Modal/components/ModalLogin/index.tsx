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
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const UserLoginSchema = yup.object().shape({
  email: yup.string().email("Email inválido!").required("Campo obrigatório"),
  senha: yup.string().required("Campo obrigatório"),
});

interface IUserLoginData {
  email: string;
  senha: string;
}

export default function ModalLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IUserLoginData>({
    resolver: yupResolver(UserLoginSchema),
  });

  function onError() {
    toast.error("Erro: verifique os campos do formulário!", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

  function onSubmit(data: IUserLoginData) {
    console.log(data);
  }
  return (
    <LoginModalContainer>
      <FormContainer action='' onSubmit={handleSubmit(onSubmit, onError)}>
        <Title>Login</Title>
        <Description>Faça seu login para entrar no site</Description>
        <input
          type='email'
          placeholder='Digite seu email'
          {...register("email")}
        />
        <ErrorText>{errors?.email?.message}</ErrorText>
        <input
          type='password'
          placeholder='Digite sua senha'
          {...register("senha")}
        />
        <ErrorText>{errors?.senha?.message}</ErrorText>
        <ButtonLogar type='submit'>Logar</ButtonLogar>
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
