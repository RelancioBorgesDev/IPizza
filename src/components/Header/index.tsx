import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  ButtonsContainer,
  HamburguerButton,
  Header,
  HeaderList,
  HeaderListItem,
} from "./style";
import logo from "../../assets/logo.svg";
import { List, X } from "phosphor-react";
import HamburguerMenu from "./components/HamburguerMenu";
import NavButtons from "../NavButtons";

export default function Navbar() {
  const [isActive, setIsActive] = useState<boolean>(false);

  function handleActiveHamburguerMenu() {
    setIsActive(!isActive);
  }

  return (
    <>
      <Header>
        <Image src={logo} width={60} height={60} alt='logo da pizzaria' />
        {!isActive ? (
          <>
            <HeaderList>
              <HeaderListItem>
                <Link href={"/"}>Inicio</Link>
              </HeaderListItem>
              <HeaderListItem>
                <Link href={"/"}>Sobre</Link>
              </HeaderListItem>
              <HeaderListItem>
                <Link href={"/"}>Cardápio</Link>
              </HeaderListItem>
              <HeaderListItem>
                <Link href={"/"}>Contato</Link>
              </HeaderListItem>
            </HeaderList>
            
            <ButtonsContainer>
              <NavButtons />
            </ButtonsContainer>

            <HamburguerButton onClick={handleActiveHamburguerMenu}>
              {isActive ? (
                <X size={32} color='#fff' />
              ) : (
                <List size={32} color='#fff' />
              )}
            </HamburguerButton>
          </>
        ) : (
          <HamburguerMenu
            isActive={isActive}
            handleActiveHamburguerMenu={handleActiveHamburguerMenu}
          />
        )}
      </Header>
    </>
  );
}
