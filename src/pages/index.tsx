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
          <ImageAboutSection src={about} alt="Imagem a esquerda, pizza" />
          <AboutContentContainer>
            <h1>SOBRE NÓS</h1>
            <p>
              Bem-vindo à IPizza, o seu destino para uma experiência autêntica
              de pizza italiana. Fundada com paixão e dedicação, na IPizza não
              apenas fazemos pizza, mas criamos obras de arte gastronômicas que
              irão deliciar seu paladar e alimentar sua alma. Na IPizza, a
              qualidade é nossa prioridade.
            </p>

            <p>
              Utilizamos apenas os ingredientes mais frescos e autênticos, desde
              a seleção cuidadosa de nossos queijos até a escolha dos melhores
              tomates para o nosso molho. Cada pizza é cuidadosamente montada à
              mão por nossos talentosos pizzaiolos, garantindo que cada mordida
              seja uma explosão de sabor. Além de nossas pizzas tradicionais,
              também oferecemos uma variedade de opções para atender a todos os
              gostos e preferências. Desde pizzas clássicas como Margherita e
              Pepperoni até criações exclusivas como a Pizza Supreme e a Pizza
              Vegetariana, há algo para todos na IPizza.
            </p>

            <p>
              Nosso compromisso com a excelência se estende além da comida. Na
              IPizza, queremos que cada visita seja uma experiência memorável.
              Nossa equipe calorosa e acolhedora está aqui para garantir que
              você se sinta em casa, seja você um cliente regular ou um novo
              visitante. Então, junte-se a nós na IPizza e descubra o verdadeiro
              sabor da Itália em cada fatia.
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
