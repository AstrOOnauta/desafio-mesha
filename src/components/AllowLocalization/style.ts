import styled from "styled-components";

export const MainAllowPage = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 80%;
    height: 73.5vh;
    margin: 1.5% auto;

    h3{
        background-color: transparent;
        text-align: center;
    }

    button {
        background-color: var(--yellow);
        cursor: pointer;
        font-size: x-large;
        padding: 1rem 0;
        min-width: 300px;
        margin: 1rem auto;
        border: none;
        border-radius: .4rem;

        transition: filter .2s;
        
        &:hover{
            filter: brightness(.8);
        }
    }
`