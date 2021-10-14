import styled, { keyframes } from "styled-components";

const show = keyframes `
    from {opacity: 0}
    to {opacity: 1}
`

export const ContainerPlaylistsList = styled.div`
    height:80vh
`

export const PlaylistsTable = styled.table`
    border-spacing: 0 .5rem;
    width: 90%;
    margin: 0 auto;
    padding-top: 5rem;
    animation: ${show} .4s;
    thead{
        th{
            font-weight: 400;
            padding: .5rem;
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
            padding: .5rem;
            border: 0;
            background-color: var(--black);
            color: #fff;
            word-break: break-all;
            animation: ${show} .8s;
            
            &:nth-child(1){
                width: 5%;
            }
            &:nth-child(2){
                width: 25%;
            }
            &:nth-child(3){
                width: 5%;
            }
            &:nth-child(4){
                width: 20%;
            }
            &:nth-child(5){
                width: 30%;
            }
            &:nth-child(6){
                width: 5%;
                button{
                    background-color: transparent;
                    font-size: 1.5rem;
                    transition: filter .5s;
                    &:hover{
                        filter: opacity(.8);
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
    opacity: .5;

    h2{
        padding: 2rem 0;
    }
`