import React from "react";
import Modal from "../../Modal";
import ModalLogin from "../../Modal/components/ModalLogin";
import * as Dialog from "@radix-ui/react-dialog";
import { ButtonEmpty } from "./style";


export default function ButtonLogin() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <ButtonEmpty>Login</ButtonEmpty>
      </Dialog.Trigger>
      <Modal>
        <ModalLogin />
      </Modal>
    </Dialog.Root>
  );
}
