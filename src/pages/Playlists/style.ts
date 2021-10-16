import styled, { keyframes } from "styled-components";

const show = keyframes `
    from {opacity: 0}
    to {opacity: 1}
`

export const ContainerPlaylistsList = styled.div`
    min-height: 80vh;
    padding: 2rem 0 3rem 0;
`

export const PlaylistsTable = styled.table`
    border-spacing: 0 .5rem;
    @media(min-width: 1120px){
        width: 80%;
    }
    width: 90%;
    margin: 0 auto;

    animation: ${show} .4s;
    thead{
        th{
            font-weight: 400;
            padding: .5rem 0 .5rem 1rem;
            text-align: left;
            line-height: 1.5rem;
            animation: ${show} .8s;
    
            small{
                color: #5a5a5a;
            }
        }
    }

    tbody{
        td{
            padding: 1rem 0 1rem 1rem;
            text-align: left;
            border: 0;
            background-color: var(--black);
            color: #fff;

            animation: ${show} .8s;
            
            &:nth-child(1){
                width: 5%;
                border-radius: .5rem 0 0 .5rem;
            }
            &:nth-child(2){
                width: 40%;
            }
            &:nth-child(3){
                width: 25%;
            }
            &:nth-child(4){
                width: 30%;
            }
            &:nth-child(5){
                width: 5%;
                border-radius: 0 .5rem .5rem 0;

                div{
                    display: flex;
                    justify-content: space-evenly;
                    align-items: center;

                    button{
                        background-color: transparent;
                        font-size: 1.5rem;
                        transition: filter .5s;

                        &:hover{
                            filter: opacity(.8);
                        }

                        &:nth-child(2){
                            padding: 0 1rem 0 .8rem;
                        }
                    }
                }
            }
        }
    }
`

export const NoPlaylistsTable = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 80%;
    height: 80vh;
    margin: 0 auto;

    animation: ${show} .4s;

    h2{
        padding: 2rem 0;
        opacity: .5;
    }
`