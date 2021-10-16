import styled, { keyframes } from "styled-components";
import Modal from "react-modal";

Modal.setAppElement('#root');

const show = keyframes `
    from {opacity: 0}
    to {opacity: 1}
`

export const MusicsModalContainer = styled(Modal)`
    position: relative;
    background-color: var(--black);
    color: #fff;
    border-radius: .5rem;
    text-align: center;
    min-height: 80vh;
    padding: 1rem;

    h2{
        color: var(--yellow);
        padding: 1rem 0;
    }

    div{
        max-height: 29rem;
        overflow-y: scroll;
        table{
            color: #fff;
            border-spacing: 0 .5rem;
            width: 100%;
    
            @media(min-width: 1000px){
                padding: 0 1rem;
            }
        
            animation: ${show} .4s;
            tr{
                
                td{
                    @media(min-width: 1000px){
                        padding: 2.5rem 0;
                    }
                    
                    border: 0;
                    background-color: #1d1d1d;
            
                    animation: ${show} .4s;
                    &:nth-child(1){
                        @media(min-width: 1000px){
                            width: 8%;
                        }
                        width: 20%;
                        border-radius: .5rem 0 0 .5rem;
                    }
                    &:nth-child(2){
                        @media(min-width: 1000px){
                            width: 8%;
                        }
                        width: 20%;
                        background-size: contain;
                        background-position: center;
                        background-repeat: no-repeat;
                    }
                    &:nth-child(3){
                        @media(min-width: 1000px){
                            width: 86%;
                        }
                        width: 60%;
                        padding: 1rem;
                        border-radius: 0 .5rem .5rem 0;
        
                        small{
                            color: #a1a1a1;
                        }
                    }
                }
            }
        }
        &::-webkit-scrollbar{
            width: 0;
        }
    }

    
    button{
        position: absolute;
        right: 0;
        top: 0;

        background-color: transparent;
        color: var(--yellow);

        transition: filter .2s;

        &:hover{
            filter: brightness(.8);
        }
    }
`