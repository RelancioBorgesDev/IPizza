import styled from 'styled-components';
import * as Dialog from "@radix-ui/react-dialog";

export const Overlay = styled(Dialog.Overlay)`
    position: fixed;
    width: 100vw;
    height: 100vh;
    inset: 0;
    background: #00000075;

    z-index: 200000;
`

export const Content = styled(Dialog.Content)`
    min-width: 80rem;
    height: 35rem;
    border-radius: 6px;
    background: ${({theme}) => theme.colors.dark_red};
    position: fixed;
    top: 45%;
    left:  50%;
    transform: translate(-50%, -50%);
    border-radius: 1rem;
    z-index: 200000;

    @media (max-width: 1300px){
        min-width: 60rem;
    }

    @media (max-width: 1050px){
        min-width: 50rem;
    }

    @media (max-width: 875px){
        min-width: 45rem;
    }

    @media (max-width: 765px){
        min-width: 40rem;
    }

    @media (max-width: 675px){
        min-width: 35rem;
    }


    @media (max-width: 570px){
        min-width: 25rem;
    }

    @media (max-width: 410px){
        min-width: 20rem;
    }
`