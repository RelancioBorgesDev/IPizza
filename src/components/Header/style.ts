import styled from "styled-components";

export const Header = styled.header`
    width: 100%;
    position: fixed;
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 5rem;
    background-color: ${({theme}) => theme.colors.dark_red};
    z-index: 2;


    @media (max-width: 1050px){
        flex-direction: column;
        gap: 1rem;
    }

    @media (max-width: 675px){
        *{
            font-size: ${({theme}) => theme.fontSizes.sm};
        }

    }

    @media (max-width: 475px){
        flex-direction: row;
        padding: 1rem 1rem;
    }
`

export const HeaderList = styled.ul`
    display: flex;
    align-items: center;
    gap: 2rem;
    @media (min-width: 475px){
        display: flex;
    }

    @media (max-width: 475px){
        display: none;
    }
`

export const HeaderListItem = styled.li`
    font-weight: ${({theme}) => theme.fontWeights.bold};
    transition: all 0.2s ease;
    cursor: pointer;
    padding: 1rem;
    border-radius: .4rem;
    transition: all 0.2s ease;
   
   &:hover{
        color: ${({theme}) => theme.colors.orange};
        background-color: ${({theme}) => theme.colors.orange};
    }
`

export const ButtonsContainer = styled.div`
      @media (max-width: 475px){
        display: none;
    }
`


export const HamburguerButton = styled.div`
    background: transparent;
    cursor: pointer;
    z-index: 25;
    @media (min-width: 475px){
        display: none;
    }
`