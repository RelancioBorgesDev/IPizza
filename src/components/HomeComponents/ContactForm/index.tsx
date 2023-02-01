import React from "react";
import { ContatoForm, ErrorText } from "./style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ContactFormSchema = yup.object().shape({
  nome: yup.string().required("Campo obrigatório"),
  sobrenome: yup.string().required("Campo obrigatório"),
  email: yup.string().email("Email inválido!").required("Campo obrigatório"),
  telefone: yup.string(),
  mensagem: yup
    .string()
    .required("Campo obrigatório")
    .min(20, "A mensagem deve conter no mínimo 20 caracteres")
    .max(200, "Senha deve conter no mínimo 200 caracteres"),
});

interface IContactFormData {
  nome: string;
  sobrenome: string;
  email: string;
  telefone: string;
  mensagem: string;
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IContactFormData>({
    resolver: yupResolver(ContactFormSchema),
  });

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

  function onSubmit(data: IContactFormData) {
    console.log(data);
    reset();
  }
  return (
    <ContatoForm onSubmit={handleSubmit(onSubmit, onError)}>
      <input type='text' placeholder='Digite seu nome*' {...register("nome")} />
      <ErrorText>{errors?.nome?.message}</ErrorText>
      <input
        type='text'
        placeholder='Digite seu sobrenome*'
        {...register("sobrenome")}
      />
      <ErrorText>{errors?.sobrenome?.message}</ErrorText>
      <input
        type='email'
        placeholder='Digite seu email*'
        className='email'
        {...register("email")}
      />
      <ErrorText>{errors?.email?.message}</ErrorText>
      <input
        type='text'
        placeholder='Digite seu telefone'
        {...register("telefone")}
      />
      <ErrorText>{errors?.telefone?.message}</ErrorText>
      <textarea
        id=''
        cols={30}
        rows={10}
        placeholder='Digite sua mensagem*'
        className='mensagem'
        {...register("mensagem")}
      ></textarea>
      <ErrorText>{errors?.mensagem?.message}</ErrorText>
      <button type='submit'>Enviar</button>
    </ContatoForm>
  );
}
