import React from "react";
import { ButtonsContainer } from "./style";
import ButtonCadastro from "./ButtonCadastro";
import ButtonLogin from "./ButtonLogin";

export default function NavButtons() {
  return (
    <ButtonsContainer>
      <ButtonCadastro />
      <ButtonLogin />
    </ButtonsContainer>
  );
}
