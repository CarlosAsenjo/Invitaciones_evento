var guest = ["", ];

/********* BOTON ENVIAR NOMBRE ***********/

document.getElementById("submit").addEventListener("click", function() {
    event.preventDefault();
  
    console.log("event");
    var name = document.getElementById("name").value;
    name = upperFirst(name);
    if (names(name)) {
        create(name);
    } else {
        alert("No has introducido ningun invitado o Invitado existente");
    }
});


function names(n) {
    for (let i = 0; i < guest.length; i++) {
        console.log("n: " + n);
        if (n == guest[i]){
            console.log("false");
            return false
        }
    }
    return true
}

function delGuest(name) {
    for (let i = 0; i < guest.length; i++) {
        if (name == guest[i]){
            guest.splice(i, 1);
        }
    }
}

/********* CREA LA INVITACION ***********/

function create(name) {

    var newLi = document.createElement("li");

    
    // SPAN
    var newSpan = document.createElement("span");
    guest.push(name);
    console.log(guest);
    newSpan.textContent = name;
    newLi.appendChild(newSpan);


    /********* CHECKVOX ***********/
    var newLabel = document.createElement("label");
    var newCheck = document.createElement("input");
    newCheck.type = "checkbox";
    newLabel.textContent = "Confirmed";
    newCheck.onclick = function () {
        if (newCheck.checked) {
            //console.log("cambia la clase")
            newLi.className = "responded";

        }else{
            //console.log("no cambia la clase")
            newLi.className = "";
        }
    }
    newLabel.appendChild(newCheck);
    newLi.appendChild(newLabel);

    /********* BOTON EDITAR ***********/
    
    var newEdit = document.createElement("button");
    newEdit.textContent = "edit";
    newEdit.onclick = function () {
        
    }
    newLi.appendChild(newEdit);


    /********* BOTON ELIMINAR ***********/
    var newRemove = document.createElement("button");
    newRemove.textContent = "remove";
    newRemove.onclick = function () {
        if (newRemove.onclick && newRemove.textContent == "CONFIRM")
        {
            newRemove.parentElement.remove();       
        }
        
        newRemove.style.backgroundColor = "red"
        newRemove.textContent = "CONFIRM";
        let newCross = document.createElement("button");
        newCross.textContent = "x";
        newCross.onclick = function () {
            newRemove.style.backgroundColor = "rgba(88, 183, 205, .5)";
            newRemove.textContent = "remove";
            newCross.style.display = "none";
        }
        newLi.appendChild(newCross);
    }
    newLi.appendChild(newRemove);

    document.getElementById("invitedList").appendChild(newLi);
}

/************* COMPRUEBA INPUT VACIO ****************/
/******** VERIFICA USUARIOS DUPLICADOS ***********/
/*********** REGISTRA AL USUARIO **************/


/********* Uppear LA PRIMERA LETRA ***********/

function upperFirst(name){
    var mayus, minus;
    mayus = name.charAt(0).toUpperCase();
    minus = name.substr(1).toLowerCase();
    name = mayus.concat(minus);
    return name;
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