import React, { ReactNode } from 'react'
import * as Dialog from "@radix-ui/react-dialog";
import { Content, Overlay } from './style';

interface IModalProps {
    children: ReactNode
}

export default function Modal({children} : IModalProps) {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        {children}
      </Content>
    </Dialog.Portal>
  )
}
