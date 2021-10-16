import { useState, useEffect } from "react";
import { MdLocalFireDepartment } from "react-icons/md"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"

import AllowLocalization from "../../components/AllowLocalization";
import LoadingPage from "../../components/LoadingPage"
import { Loading, HomeContainer, WeatherContainerBody, WeatherContainerHeader, FewClouds, Clouds, ShowerRain, Rain, Thunderstorm, Snow, Mist, ClearSky, PlaylistTable, WeatherContainer, PlaylistContainer, PlaylistHeader } from "./style";

export default function Home(props: any){
    const [hasSavedPlaylist, setHasSavedPlaylist] = useState(false)
    const [savePlaylist, setSavePlaylist]: any = useState([])
    
    function handleSave(){
        
        if(hasSavedPlaylist===false){
            const newPlayList: any = {
                name: props.playlist.PlaylistId === "37i9dQZF1DX8FwnYE6PRvL" ? "Rock Party" : (
                        props.playlist.PlaylistId === "37i9dQZF1DX6aTaZa0K6VA"? "Pop Up" : (
                            props.playlist.PlaylistId === "37i9dQZF1DWWEJlAGA9gs0"? "Clássical Essentials" : "Lo-fi Beats")),
                tracks: props.playlist.Results.length,
                temp: (props.weather.main.temp).toFixed(0),
                city: props.weather.name,
                createdAt: new Date(),
                musics: {
                    playlist: props.playlist
                }
            }
            
            setSavePlaylist([...savePlaylist, newPlayList])
            setHasSavedPlaylist(true)
        }
    }
    
      //Hook used to save the playlist in localStorage
    useEffect(() => {
        if(hasSavedPlaylist){
            const json = JSON.stringify(savePlaylist)
            localStorage.setItem("playlists", json)
        }
    }, [hasSavedPlaylist])

    useEffect(()=>{
        const json: any = localStorage.getItem("playlists")
        const loadedPlaylists = JSON.parse(json)
        if (loadedPlaylists) {
            setSavePlaylist(loadedPlaylists)
        }
      }, [])

    if(props.hasLocation === false){
        return(
            <AllowLocalization onClick={props.onClick}/>
        )
    }else{
        if(props.weather.length === 0){
            return(
                <LoadingPage />
            )
        }else{
            return(
                <HomeContainer>
                    <section>
                        <WeatherContainer>
                            <WeatherContainerHeader>
                                <h1>{props.weather.name}</h1>
                                <h1 style={{fontSize: "3rem"}}>{(props.weather.main.temp).toFixed(0)}°C</h1>
                            </WeatherContainerHeader>
                            {props.weather.weather[0].description === "few clouds" ?
                            (
                                <WeatherContainerBody style={{color: "var(--yellow)"}}>
                                    <FewClouds size={150}/>
                                    <small>Parcialmente nublado</small>
                                </WeatherContainerBody>
                            ) :
                            (props.weather.weather[0].description === "scattered clouds" ? (
                                <WeatherContainerBody style={{color: "var(--yellow)"}}>
                                    <Clouds size={150}/>
                                    <small>Nublado</small>
                                </WeatherContainerBody>
                            ) :
                            (props.weather.weather[0].description === "broken clouds" ? (
                                <WeatherContainerBody style={{color: "var(--yellow)"}}>
                                    <Clouds size={150}/>
                                    <small>Nublado</small>
                                </WeatherContainerBody>
                            ) :
                            (props.weather.weather[0].description === "shower rain" ? (
                                <WeatherContainerBody style={{color: "var(--yellow)"}}>
                                    <ShowerRain size={150}/>
                                    <small>Chuvoso</small>
                                </WeatherContainerBody>
                            ) :
                            (props.weather.weather[0].description === "rain" ? (
                                <WeatherContainerBody style={{color: "var(--yellow)"}}>
                                    <Rain size={150}/>
                                    <small>Chuvoso</small>
                                </WeatherContainerBody>
                            ) :
                            (props.weather.weather[0].description === "thunderstorm" ? (
                                <WeatherContainerBody style={{color: "var(--yellow)"}}>
                                    <Thunderstorm size={150}/>
                                    <small>Tempestade</small>
                                </WeatherContainerBody>
                            ) :
                            (props.weather.weather[0].description === "snow" ? (
                                <WeatherContainerBody style={{color: "var(--yellow)"}}>
                                    <Snow size={150}/>
                                    <small>Neve</small>
                                </WeatherContainerBody>
                            ) :
                            (props.weather.weather[0].description === "mist" ? (
                                <WeatherContainerBody style={{color: "var(--yellow)"}}>
                                    <Mist size={150}/>
                                    <small>Névoa</small>
                                </WeatherContainerBody>
                            ) :
                                <WeatherContainerBody style={{color: "var(--yellow)"}}>
                                    <ClearSky size={150}/>
                                    <small>Limpo</small>
                                </WeatherContainerBody>
                            )))))))    
                        }
                        </WeatherContainer>
                        <PlaylistContainer>
                            <h1>
                                <MdLocalFireDepartment style={{color: "var(--yellow)"}} />
                                    Playlist recomendada
                                <MdLocalFireDepartment style={{color: "var(--yellow)"}} />
                            </h1>
                            {props.playlist.length === 0 ? (
                                (<Loading>
                                    <div>
                                        <span/>
                                        <span/>
                                        <span/>
                                        <span/>
                                    </div>
                                </Loading>)
                            ) :
                            (<>
                                <PlaylistHeader>
                                    <h2 style={{padding: "2rem 0", color: "var(--yellow)"}}>
                                        {props.playlist.PlaylistId === "37i9dQZF1DX8FwnYE6PRvL" ? "Rock Party" : (
                                            props.playlist.PlaylistId === "37i9dQZF1DX6aTaZa0K6VA"? "Pop Up" : (
                                                props.playlist.PlaylistId === "37i9dQZF1DWWEJlAGA9gs0"? "Clássical Essentials" :
                                                "Lo-fi Beats"
                                            ))
                                        }
                                    </h2>
                                    <button type="button" onClick={handleSave}>
                                        {hasSavedPlaylist ? (<AiFillHeart size={24}/>) : (<AiOutlineHeart size={24}/>)}
                                    </button>
                                </PlaylistHeader>
                                <PlaylistTable>
                                    <tbody>
                                        {props.playlist.Results.map((music: any, index: number)=>{
                                            return(
                                                <tr key={index}>
                                                    <td>{index+1}</td>
                                                    <td style={{backgroundImage: `url(${music.track.album.images[1].url})`}}></td>
                                                    <td>{music.track.name}<br />
                                                        {music.track.artists.map((artist: any, index: number)=>{
                                                            return(
                                                                <small key={index}>{artist.name}, </small>
                                                            )
                                                        })}
                                                    </td>
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </PlaylistTable>
                            </>)}
                        </PlaylistContainer>
                    </section>
                </HomeContainer>
            )
        }
    }

}