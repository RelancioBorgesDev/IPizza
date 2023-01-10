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
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const UserRegisterSchema = yup.object().shape({
  nome: yup.string().required("Campo obrigatório"),
  email: yup.string().email("Email inválido!").required("Campo obrigatório"),
  confirmaEmail: yup
    .string()
    .email("Email inválido!")
    .oneOf([yup.ref("email"), null], "Os emails devem ser identicos")
    .required("Campo obrigatório"),
  senha: yup
    .string()
    .required("Campo obrigatório")
    .min(10, "Senha deve conter no mínimo 10 caracteres")
    .max(100, "Senha deve conter no mínimo 100 caracteres"),
  confirmaSenha: yup
    .string()
    .required("Campo obrigatório")
    .oneOf([yup.ref("senha"), null], "As senhas devem ser identicas")
    .min(10, "Senha deve conter no mínimo 10 caracteres")
    .max(100, "Senha deve conter no mínimo 100 caracteres"),
});

interface IUserData {
  nome: string;
  email: string;
  confirmaEmail: string;
  senha: string;
  confirmaSenha: string;
}

export default function ModalCadastro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IUserData>({
    resolver: yupResolver(UserRegisterSchema),
  });
  console.log(errors);

  function onError() {
    toast.error("Erro: verifique os campos do formulário!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }

  function onSubmit(data: IUserData) {
    console.log(data);
    reset();
  }
  return (
    <ModalContent>
      <FormCadastro onSubmit={handleSubmit(onSubmit, onError)}>
        <LeftImage src={kitchen} alt='Imagem cozinha' />
        <FormContent>
          <Title>Cadastro</Title>
          <Description>Faça seu cadastro para entrar no site</Description>
          <InputContainer>
            <input
              type='text'
              placeholder='Digite seu nome completo*'
              {...register("nome")}
            />
            <ErrorText>{errors?.nome?.message}</ErrorText>

            <input
              type='email'
              placeholder='Digite seu email*'
              {...register("email")}
            />
            <ErrorText>{errors?.email?.message}</ErrorText>
            <input
              type='email'
              placeholder='Confirme seu email*'
              {...register("confirmaEmail")}
            />
            <ErrorText>{errors?.confirmaEmail?.message}</ErrorText>
            <input
              type='password'
              placeholder='Digite sua senha*'
              {...register("senha")}
            />
            <ErrorText>{errors?.senha?.message}</ErrorText>
            <input
              type='password'
              placeholder='Confirme sua senha*'
              {...register("confirmaSenha")}
            />
            <ErrorText>{errors?.confirmaSenha?.message}</ErrorText>
          </InputContainer>
          <Dialog.Close asChild>
            <CloseButton>
              <X size={24} />
            </CloseButton>
          </Dialog.Close>

          <ButtonCadastrar type='submit'>Cadastrar</ButtonCadastrar>
        </FormContent>
      </FormCadastro>
    </ModalContent>
  );
}
