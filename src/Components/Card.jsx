import React from "react";
import { Link } from 'react-router-dom'
import { useDentistaStates } from "./utils/global.context";

const Card = ({ item }) => {
  const {state, dispatch} = useDentistaStates()

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
   
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <Link to={'/detail/' + item.id}>
        <div>
          <img src="./images/doctor.jpg"  alt="Doct img" width="160px"/>
          <h2>{item.name}</h2>
          <p>{item.username}</p>
          <p>{item.id}</p>
        </div>
        </Link>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        { location.pathname == '/favs' &&
        <button onClick={()=> dispatch({type:'DELETED_FAV', payload: item.id})} className="favButton" >Deleted fav</button>}
         { location.pathname == '/' &&
        <button onClick={()=> dispatch({type:'ADD_FAV', payload: item})} className="favButton" >Add fav</button>}
      
    </div>
  );
};

export default Card;
