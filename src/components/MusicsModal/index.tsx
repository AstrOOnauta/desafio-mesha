import Modal from "react-modal";
import { IoCloseSharp } from "react-icons/io5"

import { MusicsModalContainer } from "./style";

Modal.setAppElement('#root');

const customStyles = {
    overlay:{
        backgroundColor: "rgba(0,0,0,.5)"
    },
    content:{
        backgroundColor: "var(--black)",
        border: "none",
        borderRadius: ".5rem",
        width: "80%",
        height: "35rem",
        margin: "2rem auto"
    }
  };

export default function MusicsModal(props: any){
    return(
        <MusicsModalContainer isOpen={props.isOpen} onRequestClose={props.onRequestClose} style={customStyles}>
            <h2>{props.playlist.name}</h2>
            <div>
                <table>
                    <tbody>
                        {props.playlist.musics.playlist.Results.map((music: any, index: number)=>{
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
                </table>
            </div>
            <button>
                <IoCloseSharp size={50} onClick={props.onRequestClose} />
            </button>
        </MusicsModalContainer>
    )
}