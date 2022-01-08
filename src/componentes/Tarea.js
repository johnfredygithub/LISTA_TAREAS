import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faEdit,
  faTimes,
  faSquare,
} from "@fortawesome/free-solid-svg-icons";

const Tarea = ({ tarea, toggleCompletada,editarTarea, borrarTarea }) => {
  //////estado actualizar
  const [editandoTarea, cambiarEditandoTarea] = useState(false);
  const [nuevaTarea, cambiarNuevaTarea] = useState(tarea.texto);


  const handleSubmit = (e) => {
    /////action formulario
    e.preventDefault(); /////prevenir q refresque
    editarTarea(tarea.id,nuevaTarea);
    cambiarEditandoTarea(false); ///quitar formulario
  };

  return (
    <li className="lista-tareas__tarea">
      <FontAwesomeIcon ////camviar estado tarea
        icon={tarea.completada ? faCheckSquare : faSquare}
        className="lista-tareas__icono lista-tareas__icono_check"
        onClick={() => toggleCompletada(tarea.id)}
      />
      <div className="lista-tareas__texto">
        {editandoTarea ? (
          ///////formulario editar tarea
          <form className="formulario-editar-tarea" onSubmit={handleSubmit}>
            <input
              type="text"
              className="formulario-editar-tarea__input"
              value={nuevaTarea}
              onChange={(e) => cambiarNuevaTarea(e.target.value)}
            ></input>
            <button type="submit" className="formulario-editar-tarea__btn">
              ACTUALIZAR
            </button>
          </form>
        ) : (
          tarea.texto
        )}
      </div>
      <div className="lista-tareas__contenedor-botones">
        <FontAwesomeIcon
          icon={faEdit}
          className="lista-tareas__icono lista-tareas__icono-accion"
          onClick={() => cambiarEditandoTarea(!editandoTarea)}
        />

        <FontAwesomeIcon
          icon={faTimes}
          className="lista-tareas__icono lista-tareas__icono-accion"
          onClick={()=> borrarTarea(tarea.id)}
        />
      </div>
    </li>
  );
};

export default Tarea;
