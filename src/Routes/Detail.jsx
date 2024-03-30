import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [dentista, setDentista] = useState({})
  const params = useParams()
  console.log(params)
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users/' + params.id)
    .then(res => setDentista(res.data))
}, [params.id])
  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <table>
        <h3>{dentista.name}</h3>
        <h3>{dentista.email}</h3>
        <h3>{dentista.phone}</h3>
        <h3>{dentista.website}</h3>
    </table>
    </>
  )
}

export default Detail