import styled from 'styled-components';

export const ButtonEmpty = styled.button`
    padding: 1rem;
    font-weight: ${({theme}) => theme.fontWeights.bold};
    color: ${({theme}) => theme.colors.platinum_text};
    font-size: ${({theme}) => theme.fontSizes.md};
    border-radius: 0.2rem;
    cursor: pointer;
    background: transparent;
    border: 1px solid ${({theme}) => theme.colors.orange};;
    a{
        color: ${({theme}) => theme.colors.platinum_text};
    }

    &:hover{
        background: ${({theme}) => theme.colors.orange};
        a{
            color: ${({theme}) => theme.colors.black_text};
        }
    }
`