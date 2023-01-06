import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import ModalCadastro from "../../Modal/components/ModalCadastro";
import Modal from "../../Modal";
import { ButtonFilled } from "./style";


export default function ButtonCadastro() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <ButtonFilled>Cadastro</ButtonFilled>
      </Dialog.Trigger>
      <Modal>
        <ModalCadastro />
      </Modal>
    </Dialog.Root>
  );
}
