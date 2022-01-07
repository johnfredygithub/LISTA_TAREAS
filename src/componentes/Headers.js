import React from 'react'

const Header = () => {
    return (
        <header className="header">
            <h1 className="header__titulo"> LISTA DE TAREAS</h1>
            <button className="header__boton">NO MOSTRAR COMPLETADAS</button>
        </header>
      );
}
 
export default Header;