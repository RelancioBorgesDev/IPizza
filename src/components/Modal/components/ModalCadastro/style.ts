import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import Image from 'next/image'



export const CloseButton = styled.button`
    border-radius: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none ;
    background: transparent;
    color: ${({theme}) => theme.colors.platinum_text};
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;

    &:focus{
        box-shadow: 0 0 0 2px ${({theme}) => theme.colors.platinum_text};
    }
`

export const ModalContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const LeftImage = styled(Image)`
    width: 100%;
    height: 35rem;
    grid-area: image;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;

    @media (max-width: 875px){
        display: none;
    }
`

export const FormCadastro = styled.form`
    grid-area: form;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    
    input {
        width: 100%;
        padding: .75rem;
        border-radius: .2rem;
        border: 0;
        outline: 0;
        background-color: ${({theme}) => theme.colors.platinum_text};
        color: ${({theme}) => theme.colors.black_text};;
        font-size: ${({theme}) => theme.fontSizes.md};
        font-weight: ${({theme}) => theme.fontWeights.bold};
        margin-top: 1rem;

        &:focus{
            border: 5px solid ${({theme}) => theme.colors.orange};
        }

    }
`

export const FormContent = styled.div`
    width: 100%;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

`

export const Title = styled(Dialog.Title)`
    color: ${({theme}) => theme.colors.platinum_text};
    font-size: ${({theme}) => theme.fontSizes.lg};
    
`

export const Description = styled(Dialog.Description)`
color: ${({theme}) => theme.colors.platinum_text};
font-size: ${({theme}) => theme.fontSizes.md};

`
export const InputContainer = styled.div`
    width: 100%;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    gap: .2rem;
  
    font-weight: ${({theme}) => theme.fontWeights.bold};

`

export const ButtonCadastrar = styled.button`
        width: 100%;
        padding: .5rem;
        cursor: pointer;
        border: 1px solid ${({theme}) => theme.colors.orange};
        background: transparent;
        font-size: ${({theme}) => theme.fontSizes.md};
        border-radius: .2rem;
        &:hover{
            background-color: ${({theme}) => theme.colors.orange};
            color: ${({theme}) => theme.colors.platinum_text};
            font-weight: ${({theme}) => theme.fontWeights.bold};
        }   
    

`

export const ErrorText = styled.span`
    font-size: ${({theme}) => theme.fontSizes.sm};
    font-weight: ${({theme}) => theme.fontWeights.bold};
    color: ${({theme}) => theme.colors.pink_bg};
    align-self: flex-start;
    justify-self: flex-start;

`