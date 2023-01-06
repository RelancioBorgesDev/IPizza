import styled from "styled-components";

export const HamburguerButton = styled.div`
    background: transparent;
    cursor: pointer;
    z-index: 2;
    @media (min-width: 475px){
        display: none;
    }
`
interface HamburguerContainerProps {
    isActive: boolean;
}
/* ${({isActive}) => isActive 'translateX(0)': 'translateX(120%)'}; */
export const HamburguerContainer = styled.div<HamburguerContainerProps>`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 20px 20px;
    align-items: center;
    z-index: 21;
    background-color: ${({theme}) => theme.colors.dark_red};
    transition: all 0.2s ease;

    @media (min-width: 475px){
        display: none;
    }

`


/* ${({isActive}) => isActive ? 'flex' : 'none'}; */
export const HamburguerList = styled.ul<HamburguerContainerProps>`
            position: absolute;
            background-color: ${({theme}) => theme.colors.dark_red};
            top: 0;
            right: 0;
            width: 100%;
            height: fit-content;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            padding: 1.6rem 1rem;
            justify-content: flex-start;
            gap: 1rem;
            transform: ${({isActive}) => isActive ? 'translateX(0)': 'translateX(120%)'};
            transition: all 0.2s ease;
        
`

export const HamburguerItem = styled.li`
    width: 100%;
    font-weight: ${({theme}) => theme.fontWeights.bold};
    transition: all 0.2s ease;
    cursor: pointer;
    padding: 1rem;
    border-radius: .4rem;
    transition: all 0.2s ease;
    text-align: end;

   
   &:hover{
        color: ${({theme}) => theme.colors.orange};
        background-color: ${({theme}) => theme.colors.orange};
    }


`

export const HamburguerButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;

    button {
        padding: .5rem;
    }
`

