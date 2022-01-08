import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye,faEyeSlash} from '@fortawesome/free-solid-svg-icons'

const Header = ({mostrarCompletadas,cambiarMostrarCompletadas}) => {   
    const toggleCompletadas = ()=>{
        cambiarMostrarCompletadas(!mostrarCompletadas);
    }
    


    return (
        <header className="header">    
        <h1 className="header__titulo"> LISTA DE TAREAS</h1>
        {mostrarCompletadas?
            <button 
            className="header__boton"
            onClick={()=>toggleCompletadas()}
            >NO MOSTRAR COMPLETADAS
             
             <FontAwesomeIcon icon={faEyeSlash} 
             className="header__icono-boton"             
             />             
            </button>    
            :  <button 
            className="header__boton"
            onClick={()=>toggleCompletadas()}
            > MOSTRAR COMPLETADAS
            <FontAwesomeIcon icon={faEye} 
            className="header__icono-boton"/>
            
            </button>  
 }    </header>
      );
}
 
export default Header;