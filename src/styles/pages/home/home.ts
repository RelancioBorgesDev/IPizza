import styled from "styled-components";
import Image from 'next/image';
import pizzabg from '../../../assets/pizzabg.jpg'
import css from "styled-jsx/css";

export const HomeContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    position: relative;
`

/* Slider */

export const SliderContainer = styled.div`
    width: 100%;
    height: calc(100vh);
    z-index: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: rgba(0,0,0,0.7) url(/pizza.jpg);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-blend-mode: darken;
    background-attachment: fixed;
    

`

export const SliderInfoContainer = styled.div`
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    z-index: 2;
    padding: 2rem;

    h1,h2{
        font-weight: ${({theme}) => theme.fontWeights.bold};
        text-shadow: 2px 2px 4px #000000;
        text-align: center;
        color: #E84855;

    }
    h1 {
        font-size: ${({theme}) => theme.fontSizes.xl_xl};
        text-shadow: 4px 4px 4px #000000;
        letter-spacing: 8px;
        font-style: italic;
        display: flex;
        span{
            color: ${({theme}) => theme.colors.orange};
        }
    }

    button{
        padding: 1rem;
        border: 4px solid ${({theme}) => theme.colors.orange};
        background-color: transparent;
        color: ${({theme}) => theme.colors.platinum_text};
        font-weight: ${({theme}) => theme.fontWeights.bold};
        font-size: ${({theme}) => theme.fontSizes.md};
        border-radius: .75rem;
        transition: all 0.2s ease;

        display: flex;
        align-items: center;
        gap: 1rem;
        font-weight: bold;
        &:hover{
            cursor: pointer;
            transform: scale(1.1);
            border: 0;
            background-color: ${({theme}) => theme.colors.orange};
        
        }
    }


    @media (max-width: 675px) {
       h1{
        font-size: ${({theme}) => theme.fontSizes.xl};
       }

       h2{
        font-size: ${({theme}) => theme.fontSizes.md};
       }

       button {
        font-size: ${({theme}) => theme.fontSizes.sm};
       }
    }
    
`


export const AboutSection = styled.section`
    height: 100%;
    
`

export const AboutContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: .2rem;
    
    @media(max-width: 765px){
        align-items: center;
    }
   
`

export const ImageAboutSection = styled(Image)`
    width: 80rem;
    height: 30rem;

    @media(max-width: 1300px){
        width: 40rem;
    }

    @media(max-width: 1050px){
        width: 35rem;
    }
    @media(max-width: 975px){
        width: 30rem;
    }


    @media(max-width: 765px){
        display: none;
    }
`

export const AboutContentContainer = styled.div`
    height: 480px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    overflow-y:scroll;
    position:relative; 


    h1{
        font-size: ${({theme}) => theme.fontSizes.xl};
        font-weight: ${({theme}) => theme.fontWeights.bold};
        color: ${({theme}) => theme.colors.orange};
        letter-spacing: 5px;
    }

    p{
        font-size: ${({theme}) => theme.fontSizes.md};
        line-height: 20px;

    }

    @media(max-width: 1300px){
        padding: 1rem;

        h1{
            font-size: ${({theme}) => theme.fontSizes.lg};
        }

        p{
            line-height: normal;
        }
    }

    @media(max-width: 975px){
        p{
            font-size: ${({theme}) => theme.fontSizes.sm};
        }
    }

    @media(max-width: 765px){
        align-items: center;
        h1{
            font-size: ${({theme}) => theme.fontSizes.md};
        }
        p{
            font-size: ${({theme}) => theme.fontSizes.sm};
        }
    }
    
`

/* Menu Section */
export const MenuSection = styled.div`
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    background-color: ${({theme}) => theme.colors.dark_red};
    padding: 5rem 2rem;

      h1{
        font-size: ${({theme}) => theme.fontSizes.xl};
        font-weight: ${({theme}) => theme.fontWeights.bold};
        color: ${({theme}) => theme.colors.platinum_text};
        letter-spacing: 2px;
        text-shadow: 4px 2px 2px 4px rgba(0,0,0,2);
      }
      
      > p{
        font-size: ${({theme}) => theme.fontSizes.md};
        font-weight: ${({theme}) => theme.fontWeights.bold};
        color: ${({theme}) => theme.colors.platinum_text};
      }


    @media(max-width: 375px){
        gap: 2rem;
        text-align: center;
    }
`
export const ContainerCardapioItems = styled.div`
    width: 100%;
    h2{
        border-bottom: 2px solid ${({theme}) => theme.colors.orange};
        padding: .2rem;
        color: ${({theme}) => theme.colors.platinum_text};
    }


`

/* Seção Contato */

export const ContatoContainer = styled.section`
    height: 100%;
    display: flex;
    padding: 2rem;
    gap: 2rem;

    @media(max-width: 675px){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
     
    }
`

export const ContatoTitle = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    h1{
        font-size: ${({theme}) => theme.fontSizes.xl};
        color: ${({theme}) => theme.colors.orange};
        letter-spacing: 5px;
        text-align: justify;
    }

    p{
        font-size: ${({theme}) => theme.fontSizes.md_lg};
        color: ${({theme}) => theme.colors.black_text};
        letter-spacing: 2px;
        line-height: 40px;
        text-align: justify;
        text-indent: 10px;
    }

    @media(max-width: 1300px){
        h1{
            font-size: ${({theme}) => theme.fontSizes.xl};
            color: ${({theme}) => theme.colors.orange};
            letter-spacing: 5px;
        }
        p{
            font-size: ${({theme}) => theme.fontSizes.md};
            color: ${({theme}) => theme.colors.black_text};
        }
    }

    @media(max-width: 1050px){
        h1{
            font-size: ${({theme}) => theme.fontSizes.xl};
            text-align: center;
        }
        p{
            font-size: ${({theme}) => theme.fontSizes.md};
            color: ${({theme}) => theme.colors.black_text};
        }
    }

    @media(max-width: 675px){
        h1{
            font-size: ${({theme}) => theme.fontSizes.md};
        }
        p{
            font-size: ${({theme}) => theme.fontSizes.sm};
        }
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
     
    }
`

