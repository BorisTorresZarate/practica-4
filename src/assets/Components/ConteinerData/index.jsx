import { Parrafo } from "./Parrafo.jsx";
import './index.css'

export function ConteinerData({nombre,usuario,correo}) {
    return (
        <div className='conteiner-data'>
            <Parrafo nombre={nombre} usuario={usuario} correo={correo}/>
        </div>
    )
}