import './Parrafo.css'
export function Parrafo({nombre,usuario,correo}) {
    return (
        <>
            <p className='titulo'>{nombre}</p>
            <p className='subititulo2'>@{usuario}</p>
            <p className='subititulo2'>{correo}</p>
        </>
    )
}