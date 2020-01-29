
document.getElementById("submit").addEventListener("click", function(){
    event.preventDefault();
    create();
});

function create() {
    var newLi = document.createElement("li");
    var newSpan = document.createElement("span");
    var newLabel = document.createElement("label");
    var newCheck = document.createElement("input");
    
    newSpan.textContent = document.getElementById("name").value;
    newLi.appendChild(newSpan);

    newCheck.type = "checkbox";
    newLabel.textContent = "Confirmed";

    newLabel.appendChild(newCheck);

    newLi.appendChild(newLabel);


    

    document.getElementById("invitedList").appendChild(newLi);


}

/* cuando creas un nuevo boton, tiene que tener un padre
    y tienes que referirte a ese padre cuando metas el remove.
    Para eso, necesitas que un <li> contenga un <span> un <label>
    y dos <button>. Estos tienen como padre al <li> que has creado.
    y para referirte a ellos, tienes que meter listeners en todos a
    la hora de su creación. */


/********* AÑADIR NOMBRES (NO REPETIR NOMBRES, NO VACIO)***********/



/********* CONFIRMAR CHECKBOX ***********/

/********* EDITAR NOMBRES ***********/

/********* OCULTAR INVITADOS (CHECKBOX) ***********/

/********* ELIMINAR INVITADOS (BOTON REMOVE) (CON MODAL) ***********/

