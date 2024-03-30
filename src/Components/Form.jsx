import React from "react";
import { useState } from "react";

const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [usuario, setUsuario] = useState({
    nombre: '',
    email: ''
})  
const [show, setShow] = useState(false)
const [err, setErr] = useState(false)
const handleSubmit = (e) => {
  e.preventDefault()
  if(usuario.nombre.length < 5 || usuario.email.length < 1){
    setShow(false)
    setErr(true)
} else {
    setShow(true)
    setErr(false)
}
}
  return (
      <div>
        {!show && <form  onSubmit={handleSubmit}>
          <label>
            Nombre Completo:
            <input type="text"onChange={({target}) => setUsuario({...usuario, nombre: target.value})}/>
          </label>
          <br />
          <label>
            Email:
            <input type="email"onChange={({target}) => setUsuario({...usuario, email: target.value})}/>
          </label>
          <br />
          <button type="submit" class="botonForm">Enviar</button>
        </form>}
        {show && <h4 className="h4Correct">Gracias {usuario.nombre}, te contactaremos cuando antes vía mail</h4>}
        {err && <p className="pError">Por favor verifique su información nuevamente</p>}
      </div>
      
    );
  };
  

export default Form;
