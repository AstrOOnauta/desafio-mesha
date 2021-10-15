import styled from "styled-components";

export const Page404Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;

    h1{
        padding: 1rem 0 0 0;
    }

    button{
        background-color: var(--yellow);
        border-radius: .25rem;

        padding: .8rem 2rem;
        margin: 3rem 0;

        transition: filter .2s;

        &:hover{
            filter: brightness(.8);
        }
    }
`