import styled, { keyframes } from "styled-components"
import { BsCloudSunFill, BsFillCloudyFill, BsFillCloudRainHeavyFill, BsFillCloudRainFill, BsFillCloudLightningFill, BsSnow2, BsFillCloudHaze2Fill, BsSunFill } from "react-icons/bs"

const move = keyframes`
    0% {
        opacity: 50%;
		transform: translateX(-4rem);
	}
	100% {
        opacity: 100%;
		transform: translateX(4rem);
	}
`

const moveLoading = keyframes`
    from{
        transform: translateY(-1.2rem)
    }
    to{
        transform: translateY(1.2rem)
    }
`

const show = keyframes `
    from {opacity: 0}
    to {opacity: 1}
`

export const HomeContainer = styled.main`
    width: 100%;
    min-height: 80vh;

    section {
        display: grid;
        @media(min-width: 720px){
            grid-template-columns: 1fr 1.5fr;
            min-height: 40vh;
        }
        @media(min-width: 1120px){
            min-height: 80vh;
            width: 80%;
        }
        gap: 2rem;
        width: 90%;
        min-height: 80vh;
        margin: auto;
        padding: 2rem 0;
    }
`

export const WeatherContainer = styled.div`
    background-color: var(--black);
    color: #fff;
    border-radius: .5rem;
    text-align: center;
    height: 22rem;

    padding: 2rem;
`

export const WeatherContainerHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
`

export const WeatherContainerBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    margin: 2rem 0;

    small{
        padding: 2rem 0 0 0;
    }
`

export const PlaylistContainer = styled.div`
    background-color: var(--black);
    color: #fff;
    border-radius: .5rem;
    text-align: center;
    min-height: 80vh;

    padding: 1rem;
`

export const PlaylistHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    @media(min-width: 1000px){
        padding: 0 1rem;
    }

    button{
        background-color: transparent;
        color: var(--yellow);
    }
`

export const PlaylistTable = styled.table`
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
                width: 12%;
                border-radius: .5rem 0 0 .5rem;
            }
            &:nth-child(2){
                @media(min-width: 1000px){
                    width: 12%;
                }
                width: 18%;
                background-size: contain;
                background-position: center;
                background-repeat: no-repeat;
            }
            &:nth-child(3){
                @media(min-width: 1000px){
                    width: 76%;
                }
                width: 70%;
                padding: 1rem;
                border-radius: 0 .5rem .5rem 0;

                small{
                    color: #a1a1a1;
                }
            }
        }
    }
`


export const FewClouds = styled(BsCloudSunFill)`
    animation: ${move} 3s alternate infinite;
`
export const Clouds = styled(BsFillCloudyFill)`
    animation: ${move} 3s alternate infinite;
`
export const ShowerRain = styled(BsFillCloudRainHeavyFill)`
    animation: ${move} 3s alternate infinite;
`
export const Rain = styled(BsFillCloudRainFill)`
    animation: ${move} 3s alternate infinite;
`
export const Thunderstorm = styled(BsFillCloudLightningFill)`
    animation: ${move} 3s alternate infinite;
`
export const Snow = styled(BsSnow2)`
    animation: ${move} 3s alternate infinite;
`
export const Mist = styled(BsFillCloudHaze2Fill)`
    animation: ${move} 3s alternate infinite;
`
export const ClearSky = styled(BsSunFill)`
    animation: ${move} 3s alternate infinite;
`

export const Loading = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 50vh;
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
            animation: ${moveLoading} 1s alternate infinite;
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