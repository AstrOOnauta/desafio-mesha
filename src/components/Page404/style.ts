import styled, { keyframes } from "styled-components";

const show = keyframes `
    from {opacity: 0}
    to {opacity: 1}
`

export const Page404Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;

    animation: ${show} .4s;

    h1{
        padding: 1rem 0 0 0;
    }

    button{
        background-color: var(--yellow);
        border-radius: .25rem;

        padding: .8rem 2rem;
        margin: 3rem 0;

        animation: ${show} .6s;
        transition: filter .2s;

        &:hover{
            filter: brightness(.8);
        }
    }
`