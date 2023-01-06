import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";


export const LoginModalContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 0 auto;
`



export const Title = styled(Dialog.Title)`
    color: ${({theme}) => theme.colors.platinum_text};
    font-size: ${({theme}) => theme.fontSizes.lg};
`

export const Description = styled(Dialog.Description)`
color: ${({theme}) => theme.colors.platinum_text};
font-size: ${({theme}) => theme.fontSizes.md};
`

export const RightImage = styled(Image)`
    width: 100%;
    height: 35rem;
    grid-area: image;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;

    @media (max-width: 875px){
        display: none;
    }
`

export const FormContainer = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    padding: 1rem;
    gap: 1rem;


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
    }
    @media (max-width: 875px){
        gap: .5rem;
        margin-top: 8rem;
    }
  
`
export const ButtonLogar = styled.button`
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
export const ErrorText = styled.small`
    font-size: ${({theme}) => theme.fontSizes.sm};
    font-weight: ${({theme}) => theme.fontWeights.bold};
    color: ${({theme}) => theme.colors.pink_bg};
    align-self: flex-start;
    justify-self: flex-start;

`
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