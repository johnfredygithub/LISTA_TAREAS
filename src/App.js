import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./componentes/Headers";
import FormularioTareas from "./componentes/FormularioTareas";
import ListaTareas from "./componentes/ListaTareas";

const App = () => {
  /////ontener tareas guardadas de local storage
  const tareasGuardadas=
  localStorage.getItem('tareas')
  ?JSON.parse(localStorage.getItem('tareas')):[];
  
  //////////e estado de tareas
  const [tareas, cambiarTareas] = useState(tareasGuardadas);/////estado inicial

  //////guarda cuando se ejecuta cada q hay un cambio en tareas
  useEffect(() => {
    localStorage.setItem("tareas",JSON.stringify(tareas) ); /////guardar en local storage
  }, [tareas]);

///////acceder a local estorage y traer el estado de mostrar
  let configMostrarCompletadas="";
  if(localStorage.getItem('mostrarCompletadas')==null){
    configMostrarCompletadas=true;
  }else{
    configMostrarCompletadas=localStorage.getItem('mostrarCompletadas')==='true';
  }

  /////ESTADO de mostrar tareascompletadas
  const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(configMostrarCompletadas);
  
  ////guardando el estado desntro de locla storade
  useEffect(() => {
    localStorage.setItem("mostrarCompletadas",mostrarCompletadas.toString()); /////guardar en local storage
  }, [mostrarCompletadas]);


  ///console.log(tareas);
  return (
    <div className="contenedor">
      <Header
        mostrarCompletadas={mostrarCompletadas}
        cambiarMostrarCompletadas={cambiarMostrarCompletadas}
      />
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas} />
      <ListaTareas
        tareas={tareas}
        cambiarTareas={cambiarTareas}
        mostrarCompletadas={mostrarCompletadas}
      />
    </div>
  );
};

export default App;
