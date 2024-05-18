import './index.css'

export function ConteinerImg({id}) {
    return (
        <div className='conteiner-img'>
            <img src={`https://picsum.photos/200/300?random=${id}`} />
        </div>
    )
}