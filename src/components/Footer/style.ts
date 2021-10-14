import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: var(--black);
    color: #fff;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 10vh;

    a{
        color: var(--yellow);
        font-weight: 700;

        transition: filter .2s;
        
        &:hover{
            filter: brightness(.8);
        }
    }
`