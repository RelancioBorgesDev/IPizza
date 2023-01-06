import {
  AboutSection,
  HomeContainer,
  SliderContainer,
  SliderInfoContainer,
} from "../styles/pages/home/home";

import Navbar from "../components/Header";
import { ArrowDown } from "phosphor-react";

export default function Home() {
  return (
    <HomeContainer>
      <Navbar />

      <SliderContainer>
        <SliderInfoContainer>
          <h1>
            <span>I</span>
            PIZZA
          </h1>
          <h2>A melhor pizza da cidade!</h2>
          <button>Veja o nosso cardápio <ArrowDown size={20} /></button>
        </SliderInfoContainer>
      </SliderContainer>

      <AboutSection>
        <div>
          Hello
        </div>
      </AboutSection>
    </HomeContainer>
  );
}
