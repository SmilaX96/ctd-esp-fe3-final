import React from 'react'
import { Link } from 'react-router-dom'
import { useDentistaStates } from './utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const { toggleTheme } = useDentistaStates(); 

  const handleThemeChange = () => {
    toggleTheme();
  };

  return (
    <nav> 
      {/* Agrega los enlaces a las rutas definidas */}
      <Link to='/'><h3>Home</h3></Link>
      <Link to='/favs'><h3>Favs</h3></Link>
      <Link to='/contact'><h3>Contact</h3></Link>
      {/* Agrega el botón para cambiar el tema y asocia el evento onClick */}
      <button onClick={handleThemeChange} className="botonTheme">Change theme</button>
    </nav>
  );
};

export default Navbar;