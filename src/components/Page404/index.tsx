import { Link } from "react-router-dom";
import { AiFillWarning } from "react-icons/ai"

import { Page404Container } from "./style";


export default function Page404(){
    return(
        <Page404Container>
            <AiFillWarning size={100} style={{color: "var(--yellow)"}}/>
            <h1>Página não encontrada!!</h1>
            <button type="button"><Link to="/">Página inicial</Link></button>
        </Page404Container>
    )
}