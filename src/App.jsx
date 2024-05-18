
import { useEffect, useState } from 'react';
import './App.css'
import { ConteinerData } from './assets/Components/ConteinerData';
import { ConteinerImg } from './assets/Components/ConteinerImg';

function App() {
  const [data, setData] = useState([])
  async function getData() {
    const rs = await fetch('https://jsonplaceholder.typicode.com/users')
    const rsjson = await rs.json()
    const filterData = rsjson.map((datos) => {
      return {
        id: datos.id,
        nombre: datos.name,
        usuario: datos.username,
        correo: datos.email,
      }
    })
    setData(filterData)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <div className='principal'>
        {
          data &&
          data.map((datos, index) =>
            <div key={index} className='conteiner'>
              <ConteinerImg id={datos.id} />
              <ConteinerData nombre={datos.nombre} usuario={datos.usuario} correo={datos.correo}/>
            </div>
          )
        }
      </div>

    </>
  )
}

export default App
