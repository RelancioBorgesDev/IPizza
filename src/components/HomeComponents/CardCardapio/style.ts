import Image from 'next/image';
import styled from 'styled-components';

export const CardContainer = styled.div`

    display: flex;
    align-items: center;
    justify-items: center;
    gap: 1rem;
    padding: 1rem;

    background-color: ${({theme}) => theme.colors.orange};
    border-radius: .75rem;
    transition: all 0.2s ease-in-out;
    z-index: 200000;
    margin: 0rem 1rem;




   
`;


export const CardImage = styled(Image)`
    width: 100px;
    height: 100px;

    @media(max-width: 975px){
        display: none;
    }

 
`;

export const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: ${({theme}) => theme.colors.black_text};
    font-weight: ${({theme}) => theme.fontWeights.bold};
    span{
        font-size: ${({theme}) => theme.fontSizes.lg};
    }

    p{
        font-size: ${({theme}) => theme.fontSizes.sm};
        color: ${({theme}) => theme.colors.black_text};
       text-align: justify;
        text-indent: 10px;
        @media(max-width: 510px){
        display:none;
        }
    }

    h3{
        font-weight: ${({theme}) => theme.fontWeights.bold};
    }

    
`