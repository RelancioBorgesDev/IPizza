import { List, X } from "phosphor-react";
import React from "react";
import {
  HamburguerButton,
  HamburguerButtonsContainer,
  HamburguerContainer,
  HamburguerItem,
  HamburguerList,
} from "./style";
import Link from "next/link";
import NavButtons from "../../../NavButtons/index";
interface HamburguerMenuProps {
  isActive: boolean;
  handleActiveHamburguerMenu: () => void;
}

export default function HamburguerMenu({
  isActive,
  handleActiveHamburguerMenu,
}: HamburguerMenuProps) {
  return (
    <HamburguerContainer isActive={isActive}>
      <HamburguerList isActive={isActive}>
        <HamburguerButton onClick={handleActiveHamburguerMenu}>
          <X size={32} color='#fff' />
        </HamburguerButton>
        <HamburguerItem>
          <Link href={"/"}>Inicio</Link>
        </HamburguerItem>
        <HamburguerItem>
          <Link href={"/"}>Sobre</Link>
        </HamburguerItem>
        <HamburguerItem>
          <Link href={"/"}>Cardápio</Link>
        </HamburguerItem>
        <HamburguerItem>
          <Link href={"/"}>Contato</Link>
        </HamburguerItem>
        <HamburguerButtonsContainer>
          <NavButtons />
        </HamburguerButtonsContainer>
      </HamburguerList>
    </HamburguerContainer>
  );
}
