var name;
var guest = [];

document.getElementById("submit").addEventListener("click", function() {
    event.preventDefault();

    console.log("event");
    name = document.getElementById("name").value;
    upperFirst();
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

    /*var newCopy = document.getElementById("invitedList").children.item(0)
    console.log(newCopy)*/

    newLi.appendChild(newSpan);

    newSpan.textContent = name;
    newCheck.type = "checkbox";
    newCheck.onclick = function () {
        if (newCheck.checked) {
            newLi.className = "responded";
        }else{
            newLi.className = "";
        }
    }
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


/********* Uppear LA PRIMERA LETRA***********/

function upperFirst(){

    var mayus, minus;
    mayus = name.charAt(0).toUpperCase();
    console.log("mayus " + mayus)
    minus = name.substr(1).toLowerCase();
    console.log("minus " + minus)

    name = mayus.concat(minus);
    console.log("nameCap " + name)
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