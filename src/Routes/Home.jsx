import React from 'react'
import Card from '../Components/Card'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
 
  const [list, setList] = React.useState([]);

  React.useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setList(res.data);
      });
  }, []);

  return (
    <main > {/* Aplica la clase de fondo */}
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {list.map((dentista) => <Card key={dentista.id} item={dentista}/>)}
      </div>
    </main>
  );
};

export default Home;