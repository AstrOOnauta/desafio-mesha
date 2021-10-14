import { MainAllowPage } from "./style"

export default function AllowLocalization(props: any){

    return(
        <MainAllowPage>
            <h3>Por favor habilitar a localização para continuar !!!</h3>
            <button onClick={props.onClick} >Habilitar Localização</button>
        </MainAllowPage>
    )
}