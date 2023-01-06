import { createGlobalStyle } from "styled-components";

export const GlobalStyles =  createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
       
    }

    body {
	    line-height: 1;
        font-size: ${({theme}) => theme.fontSizes.md};
        color: ${({theme}) => theme.colors.black_text};
        font-weight: ${({theme}) => theme.fontWeights.normal};
        background-color: ${({theme}) => theme.colors.pink_bg};
    }
    ol, ul {
        list-style: none;
    }

    a{
        color: ${({theme}) => theme.colors.platinum_text};
        text-decoration: none;
        font-size: ${({theme}) => theme.fontSizes.md_lg};

       
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }


    

`