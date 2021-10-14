import styled, { keyframes } from "styled-components"

const move = keyframes`
    from{
        transform: translateY(-1.2rem)
    }
    to{
        transform: translateY(1.2rem)
    }
`

export const MainLoading = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 80%;
    height: 73.5vh;
    margin: 1.5% auto;

    div{
        background-color: transparent;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 12rem;
        height: 5rem;
        margin: 1rem;
        padding-top: 1rem;
        overflow-y: hidden;

        span{
            animation: ${move} 1s alternate infinite;
            background-color: var(--yellow);
            margin-top: 1rem;
            height: 1.8rem;
            width: 1.8rem;
            border: 1px solid var(--black);
            border-radius: 50%;
            &:nth-child(1){
                animation-delay: 0s;
            }
            &:nth-child(2){
                animation-delay: -0.1s;
            }
            &:nth-child(3){
                animation-delay: -0.2s;
            }
            &:nth-child(4){
                animation-delay: -0.3s;
            }
        }
    }
`