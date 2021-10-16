import { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import axios from "axios"

import { GlobalStyle } from './styles/global';
import Header from './components/Header';
import Home from './components/Home';
import Playlists from './components/Playlists';
import Footer from './components/Footer';
import Page404 from './components/Page404';


function App() {
  const [hasLocation, setHasLocation] = useState(false)
  const [weather, setWeather] = useState([])
  const [playlist, setPlaylist] = useState([])

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
      const lat: number = position.coords.latitude
      const long: number = position.coords.longitude
      getWeather(lat, long)
      setHasLocation(true)
    })
  }, [])

  async function getWeather(lat: number, long: number){
    const weatherResponse: any = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
      params: {
        lat: lat,
        lon: long,
        appid: "f5d2a079d040b7359dd2bcbaa35fae40",
        lang: 'en',
        units: 'metric'
      }
    })
    .catch((error)=>{
      console.log("Ocorreu um "+error)
    })
    setWeather(weatherResponse.data)
    getPlaylist(weatherResponse.data)
  }

  async function getPlaylist(data: any){
    const localTemperature = data.main.temp
    let idPlaylist

    if(localTemperature > 32){
      idPlaylist = "37i9dQZF1DX8FwnYE6PRvL"
    }else if(localTemperature <= 32){
      idPlaylist = "37i9dQZF1DX6aTaZa0K6VA"
    }else if(localTemperature <= 24){
      idPlaylist = "37i9dQZF1DWWEJlAGA9gs0"
    }else if(localTemperature <= 16){
      idPlaylist = "37i9dQZF1DWWQRwui0ExPn"
    }

    axios.get("https://unsa-unofficial-spotify-api.p.rapidapi.com/playlist", {
      params: {id: idPlaylist},
      headers: {
        'x-rapidapi-host': 'unsa-unofficial-spotify-api.p.rapidapi.com',
        'x-rapidapi-key': '1891696a55msh40f6b29cee7a93ep10454ejsncbbb4e633731'
      }
    })
    .catch((error)=>{
      console.log("Ocorreu um "+error)
    })
    .then((res: any)=>{
      setPlaylist(res.data)
    })
  }

  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" render={(routeProps) =>(
          <Home {...routeProps} weather={weather} hasLocation={hasLocation} playlist={playlist} 
                onClick={()=>
                  navigator.geolocation.getCurrentPosition((position)=>{
                    const lat: number = position.coords.latitude
                    const long: number = position.coords.longitude
                    getWeather(lat, long)
                    setHasLocation(true)
                })}
          />
        )}/>
        <Route path="/playlists" component={Playlists}/>
        <Route path="*" component={Page404}/>
      </Switch>
      <Footer />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
