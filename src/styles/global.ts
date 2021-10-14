import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    :root{
        --background: #f2f0f5;
        --black: #303030;
        --yellow: #fbb034;
        --green: #33cc95;
        --red: #e52e4d;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: var(--background);
        -webkit-font-smoothing: antialiesed;
    }

    body, input, button{
        font-family: "Poppins", sans-serif;
        font-weight: 400;
        @media (max-width: 1080px){
            font-size: 93.5%;
        }
        @media (max-width: 720px){
            font-size: 86.5%;
        }
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }
    
    button{
        cursor: pointer;
        border: none;
    }

    a{
        color: inherit;
        text-decoration: none;
    }
`