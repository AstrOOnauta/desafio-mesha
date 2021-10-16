import styled from "styled-components"
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
    background-color: var(--black);
    color: var(--yellow);

    display: flex;
    align-items: center;

    width: 100%;
    height: 10vh;

    section{
        display: flex;
        justify-content: space-between;

        @media (max-width: 1080px){
            width: 90%;;
        }
        width: 80%;
        margin: auto;

        div{
            display: flex;
            align-items: center;

            h2{
                padding: 0 1rem 0 .5rem;
            }
        }
    }

`

export const LinkRoute = styled(Link)`
    color: inherit;
    text-decoration: none;
    text-align: center;

    transition: filter .2s;

    &:hover{
        filter: brightness(.8);
    }

    &:nth-child(2){
        padding: 0 0 0 1rem;
    }
`