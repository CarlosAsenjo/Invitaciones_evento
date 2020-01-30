var name;
var guest = [];

document.getElementById("submit").addEventListener("click", function() {
    event.preventDefault();

    console.log("event");
    name = document.getElementById("name").value;
    name.capitalize();
    register();

});

/********* CREA LA INVITACION ***********/

function create() {

    var newLi = document.createElement("li");
    var newSpan = document.createElement("span");
    var newLabel = document.createElement("label");
    var newCheck = document.createElement("input");
    var newEdit = document.createElement("button");
    var newRemove = document.createElement("button");

    newLi.appendChild(newSpan);

    newSpan.textContent = document.getElementById("name").value;
    newCheck.type = "checkbox";
    newLabel.textContent = "Confirmed";
    newEdit.textContent = "edit";
    newRemove.textContent = "remove";

    newLi.appendChild(newLabel);
    newLi.appendChild(newEdit);
    newLi.appendChild(newRemove);
    newLabel.appendChild(newCheck);

    document.getElementById("invitedList").appendChild(newLi);
}

/************* COMPRUEBA INPUT VACIO ****************/
/******** VERIFICA USUARIOS DUPLICADOS ***********/
/*********** REGISTRA AL USUARIO **************/

function register() {

    if (name == "") {
        alert("No has introducido ningun invitado");
        return;

    } else {
        for (let i = 0; i < guest.length; i++) {

            if (name == guest[i]) {
                alert("Invitado existente");
                return;
            }
        }
    }
    console.log("añade invitado al array");
    guest.push(name);
    for (let i = 0; i < guest.length; i++) {
        console.log(guest[i]);
    }
    console.log("create");
    create();
}

//String.prototype.capitalize = function() {
//  return this.replace(/(^|\s)([a-z])/g, function(m, p1, p2) { return p1 + p2.toUpperCase(); });
//};

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