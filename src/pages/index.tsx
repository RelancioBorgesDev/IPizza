import {
  AboutContainer,
  AboutContentContainer,
  AboutSection,
  ContainerCardapioItems,
  ContatoContainer,
  ContatoTitle,
  HomeContainer,
  ImageAboutSection,
  MenuSection,
  SliderContainer,
  SliderInfoContainer,
} from "../styles/pages/home/home";

import Navbar from "../components/Header";
import { ArrowDown } from "phosphor-react";
import about from "/public/about.jpg";
import CardCardapio from "../components/HomeComponents/CardCardapio";
import SlickSlider from "../components/HomeComponents/SlickSlider";
import ContactForm from "../components/HomeComponents/ContactForm";

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

      {/* Sobre */}
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
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              earum unde, sapiente magni qui deleniti. Voluptas id accusantium
              ullam officia consequatur qui quas fuga a error provident, nemo
              asperiores neque!
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
      {/* Seção Sobre */}

      {/* Cardápio */}
      <MenuSection>
        <h1>CARDÁPIO</h1>
        <p>Veja os principais items do nosso cardápio</p>
        <ContainerCardapioItems>
          <h2>Pizzas</h2>
          <SlickSlider>
            <CardCardapio />
            <CardCardapio />
            <CardCardapio />
            <CardCardapio />
            <CardCardapio />
            
          </SlickSlider>
        </ContainerCardapioItems>
        <ContainerCardapioItems>
          <h2>Esfihas</h2>
          <SlickSlider>
          <CardCardapio />
            <CardCardapio />
            <CardCardapio />
            <CardCardapio />
            <CardCardapio />
          
          </SlickSlider>
        </ContainerCardapioItems>
      </MenuSection>
      {/* Fim do Cardápio */}

      {/* Inicio Contato */}
      <ContatoContainer>
        <ContatoTitle>
          <h1>ENTRE EM CONTATO</h1>
          <p>
            Se tiver alguma dúvida ou sugestão, por favor nos envie uma
            mensagem, você será respondido o mais rápido possível pela nossa
            equipe!
          </p>
        </ContatoTitle>
        <ContactForm />
      </ContatoContainer>
      {/* Fim do Contato */}
    </HomeContainer>
  );
}
