import { useState, useEffect } from "react"
import { FaPlusCircle, FaTrash } from "react-icons/fa"
import { BsHourglassSplit } from "react-icons/bs"

import { ContainerPlaylistsList, PlaylistsTable, NoPlaylistsTable } from "./style"
import MusicsModal from "../../components/MusicsModal"

export default function Playlists(){
    const [deletePlaylist, setDeletePlaylist] = useState(false)
    const [savedPlaylist, setSavedPlaylist]: any = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [playlistIndex, setPlaylistIndex] = useState(0)

    function handleModalOpen(index: number){
        setPlaylistIndex(index)
        setIsModalOpen(true)
    }

    function handleModalClose(){
        setIsModalOpen(false)
      }

    function removeTransition(index: number){
        setDeletePlaylist(true)

        const newPlaylistList = [...savedPlaylist]
        newPlaylistList.splice(index, 1)
        setSavedPlaylist(newPlaylistList)
    }

    useEffect(() => {
        if(deletePlaylist){
            const json = JSON.stringify(savedPlaylist)
            localStorage.setItem("playlists", json)
            setDeletePlaylist(false)
        }
    }, [deletePlaylist])

    useEffect(()=>{
        const json: any = localStorage.getItem("playlists")
        const loadedPlaylists = JSON.parse(json)
        if (loadedPlaylists) {
            setSavedPlaylist(loadedPlaylists)
        }
    }, [])

    if(savedPlaylist.length === 0) {
        return(
            <NoPlaylistsTable>
                <BsHourglassSplit size={100} style={{opacity: ".5"}}/>
                <h2>Nenhuma playlist adicionada aos favoritos!</h2>

            </NoPlaylistsTable>
        )
    }else{
        return(
            <ContainerPlaylistsList>
                <PlaylistsTable>
                    <thead>
                            <tr>
                                <th><small>Faixas</small></th>
                                <th><small>Título</small></th>
                                <th><small>Cidade</small></th>
                                <th><small>Data</small></th>
                                <th><small>Ações</small></th>
                            </tr>
                        </thead>
                        <tbody>
                            {savedPlaylist.map((playlist: any, index: number)=>{
                                return(
                                    <tr key={index}>
                                        <td>{playlist.tracks}</td>
                                        <td>{playlist.name}</td>
                                        <td>{playlist.city} ({playlist.temp}°C)</td>
                                        <td>{new Intl.DateTimeFormat("pt-BR").format(new Date(playlist.createdAt))}</td>
                                        <td>
                                            <div>
                                                <button type="button" onClick={()=>handleModalOpen(index)}>
                                                    <FaPlusCircle size={21}style={{color: "var(--yellow)"}}/>
                                                </button>
                                                <button type="button" onClick={()=>removeTransition(index)}>
                                                    <FaTrash size={20}style={{color: "var(--yellow)"}} />  
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                </PlaylistsTable>
                <MusicsModal isOpen={isModalOpen} onRequestClose={handleModalClose} playlist={savedPlaylist[playlistIndex]}/>
            </ContainerPlaylistsList>
        )
    }

}