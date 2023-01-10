import styled from "styled-components";

export const ContatoForm = styled.form`
    width: 100%;
    display: grid;
    grid-template-areas: 
    "nome" "sobrenome"
    "email" "telefone"
    "mensagem" "mensagem"
    "botao"    
    ;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;

    input{
        width: 100%;
        padding: .75rem;
        border-radius: .2rem;
        border: 0;
        outline: 0;
        background-color: ${({theme}) => theme.colors.platinum_text};
        color: ${({theme}) => theme.colors.black_text};;
        font-size: ${({theme}) => theme.fontSizes.md};
        font-weight: ${({theme}) => theme.fontWeights.bold};

        &:focus{
            border: 4px solid ${({theme}) =>theme.colors.orange};
        }
    }


    .nome{
        grid-area: nome;
    }
    .sobrenome{
        grid-area: sobrenome;
        grid-column: 2;
        grid-row: 1;
    }
    .email{
        grid-area: email;
        grid-row: 2;
        
    }
    .telefone{
        grid-area: telefone;
        grid-column: 2;
        grid-row: 2;
    }
    .mensagem{
        grid-area: mensagem;
        grid-row: auto;
        grid-column: auto;
        grid-column-end: span 2;

        width: 100%;
        padding: .75rem;
        border-radius: .2rem;
        border: 0;
        outline: 0;
        background-color: ${({theme}) => theme.colors.platinum_text};
        color: ${({theme}) => theme.colors.black_text};;
        font-size: ${({theme}) => theme.fontSizes.md};
        font-weight: ${({theme}) => theme.fontWeights.bold};


        &:focus{
            border: 4px solid ${({theme}) =>theme.colors.orange};
        }
    }
    .erro{
        border: 4px solid ${({theme}) => theme.colors.light_red};
    }
    button{
        grid-area: botao;
        grid-row: 4;
        grid-column: 2;

        width: 100%;
        padding: .5rem;
        cursor: pointer;
        border: 4px solid ${({theme}) => theme.colors.orange};
        background-color: transparent;
        font-size: ${({theme}) => theme.fontSizes.md};
        border-radius: .2rem;
        transition: all 0.2s ease-in-out;
        &:hover{
            background-color: ${({theme}) => theme.colors.orange};
            color: ${({theme}) => theme.colors.platinum_text};
            font-weight: ${({theme}) => theme.fontWeights.bold};
        }   
    }


    @media(max-width: 1050px){
       display: flex;
       flex-direction: column;
    }
`