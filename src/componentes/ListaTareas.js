import React from "react";
import Tarea from "./Tarea";
const ListaTareas = ({ tareas, cambiarTareas,mostrarCompletadas }) => {

    ////// tarea completada 
  const toggleCompletada = (id) => {
     cambiarTareas(tareas.map((tarea) => {/////recorrer tareas
        if (tarea.id === id) {////verificar id de la tarea 
          return { ...tarea, completada: !tarea.completada };
        }
        return tarea;
      })
    );
  };
      //////editar tarea 
      const editarTarea = (id,nuevoTexto) => {
        cambiarTareas(tareas.map((tarea) => {/////recorrer tareas
           if (tarea.id === id) {////verificar id de la tarea 
             return {...tarea, texto:nuevoTexto};
           }
           return tarea;
         })
       );
     };

   //////eliminar 
   const borrarTarea = (id) => {
    cambiarTareas(tareas.filter((tarea) => {/////recorrer tareas
       if (tarea.id !== id) {////verificar id de la tarea 
        return tarea;
       }
       return;
     })
   );
 };   

   




  return (
    <ul className="lista-tareas">
      {/* lsitar tareas con .map ---VERIFICAR SI HAY TAREAS  AGREGADAS  */}
      {tareas.length > 0 ? (
        tareas.map((tarea) => {
        if(mostrarCompletadas){
            return (/////restornar propiades de tareas
                <Tarea
                  key={tarea.id}
                  tarea={tarea}
                  toggleCompletada={toggleCompletada}
                  editarTarea={editarTarea}
                  borrarTarea={borrarTarea}
                />
              );
              ////sila tarea no esta completada
        }else if(!tarea.completada){
            return (/////restornar propiades de tareas
                <Tarea
                  key={tarea.id}
                  tarea={tarea}
                  toggleCompletada={toggleCompletada}
                  editarTarea={editarTarea}
                  borrarTarea={borrarTarea}
                />
              );
        }
         return;
        })
      ) : (
        <div className="lista-tareas__mensaje">'NO HAY NINGUNA TAREA'</div>
      )}
    </ul>
  );
};

export default ListaTareas;
