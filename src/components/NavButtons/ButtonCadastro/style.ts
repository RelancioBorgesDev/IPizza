import styled from 'styled-components';

export const ButtonFilled = styled.button`
    padding: 1rem;
    font-weight: ${({theme}) => theme.fontWeights.bold};
    color: ${({theme}) => theme.colors.platinum_text};
    font-size: ${({theme}) => theme.fontSizes.md};
    border-radius: 0.2rem;
    cursor: pointer;
    background-color: ${({theme}) => theme.colors.orange};
    border: 1px solid ${({theme}) => theme.colors.orange};
    transition: all 0.2s ease;

    :hover{
        border: 1px solid ${({theme}) => theme.colors.orange};
        background: transparent;
        a{
            color: ${({theme}) => theme.colors.platinum_text};
        }
    }
`