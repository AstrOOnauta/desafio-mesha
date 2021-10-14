import { FaMeteor } from "react-icons/fa"

import { HeaderContainer, LinkRoute } from "./style";


export default function Header(){
    return(
        <HeaderContainer>
            <section>
                <div>
                    <FaMeteor size={30}/>
                    <h2>AstrOOnauta</h2>
                </div>
                <div>
                    <LinkRoute to="/">Home</LinkRoute>
                    <LinkRoute to="/playlists">Playlists</LinkRoute>
                </div>
            </section>
        </HeaderContainer>
    )
}