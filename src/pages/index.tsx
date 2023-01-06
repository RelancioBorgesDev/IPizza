import {
  AboutContainer,
  AboutContentContainer,
  AboutSection,
  HomeContainer,
  ImageAboutSection,
  SliderContainer,
  SliderInfoContainer,
} from "../styles/pages/home/home";

import Navbar from "../components/Header";
import { ArrowDown } from "phosphor-react";
import about from "/public/about.jpg";

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
          <button>
            Veja o nosso cardápio <ArrowDown size={20} />
          </button>
        </SliderInfoContainer>
      </SliderContainer>

      <AboutSection>
        <AboutContainer>
          <ImageAboutSection src={about} alt='Imagem a esquerda, pizza' />

          <AboutContentContainer>
            <h1>SOBRE NÓS</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              necessitatibus, porro officiis itaque, eligendi facilis quod
              molestias tempora in iure dolorum recusandae hic fugit ab alias
              totam rerum beatae accusamus?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad esse
              commodi alias optio ipsam odit assumenda expedita, quo voluptates
              corrupti distinctio dolorum quidem iusto animi officiis et
              repellendus. Distinctio, minus!
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              earum unde, sapiente magni qui deleniti. Voluptas id accusantium
              ullam officia consequatur qui quas fuga a error provident, nemo
              asperiores neque!
            </p>
          </AboutContentContainer>
        </AboutContainer>
      </AboutSection>
    </HomeContainer>
  );
}
