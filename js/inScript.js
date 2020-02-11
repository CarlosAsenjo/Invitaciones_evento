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


/********* Uppear PRIMERA LETRA ***********/
function upperFirst(name) {
    var mayus, minus;
    mayus = name.charAt(0).toUpperCase();
    minus = name.substr(1).toLowerCase();
    name = mayus.concat(minus);
    return name;
}


/********* COMPRUEBA INVITADO EXISTENTE EN ARRAY ***********/
function names(n) {

    for (let i = 0; i < guest.length; i++) {
        console.log("n: " + n);
        if (n == guest[i]) {
            console.log("false");
            return false;
        }
    }
    return true;
}


/********* COMPRUEBA INVITADO DUPLICADO ***********/
function changeName(n1, n2) {

    for (let i = 0; i < guest.length; i++) {
        console.log("n1: " + n1 + " n2: " + n2);
        if (n1 == guest[i]) {
            guest.splice(i, 0, n2);
            console.log("del guest: " + guest[i]);
            return true;
        }
        return false;
    }
}

/********* ELIMINA INVITADO DEL ARRAY ***********/
function delGuest(name) {

    for (let i = 0; i < guest.length; i++) {
        if (name == guest[i]) {
            guest.splice(i, 1);
            console.log("usuario eliminado " + guest);
        }
    }
}

/********* CREA LA INVITACION ***********/
function create(name) {

    // Li
    var newLi = document.createElement("li");
    newLi.className = "responded";

    // SPAN
    var newSpan = document.createElement("span");
    guest.push(name);
    console.log(guest);
    newSpan.textContent = name;
    newLi.appendChild(newSpan);

    // INPUT
    var newInput = document.createElement("input");
    newInput.type = "text";
    newInput.textContent = "";
    newLi.appendChild(newInput);
    newInput.style.display = "none";

    // LABEL / INPUT CHECKBOX
    var newLabel = document.createElement("label");
    var newCheck = document.createElement("input");
    newCheck.type = "checkbox";
    newLabel.textContent = "Confirmed";
    newCheck.onclick = function() {
        if (newCheck.checked) {
            //console.log("cambia la clase")
            newLi.className = "responded";

        } else {
            //console.log("no cambia la clase")
            newLi.className = "";
        }
    }
    newLabel.appendChild(newCheck);
    newLi.appendChild(newLabel);

    /********* BOTON EDITAR ***********/ //TRABAJAR EN ESTA FUNCION
    var newEdit = document.createElement("button");
    newEdit.textContent = "edit";

    newEdit.onclick = function() {
        console.log("entra en editar")
        newSpan.style.display = "none";
        newInput.style.display = "block";
        newEdit.textContent = "Ok!";
        newEdit.style.backgroundColor = "rgb(102, 237, 138)";
        //CONFIRMAR CAMBIO
        if (newEdit.onclick) {
            var nameInput = upperFirst(newInput.value);
            console.log("valor input: " + nameInput)
            console.log(newSpan.textContent);
            if (names(nameInput) == true) {
                //Reemplazar nombre span en el array por el de input
                delGuest(newSpan.textContent);
                guest.push(nameInput);
                console.log(newSpan.textContent + " " + nameInput);
                newInput.style.display = "none";
                newSpan.style.display = "block";
                newSpan.textContent = nameInput;
                newEdit.style.backgroundColor = "rgba(88, 183, 205, .5)";
                newEdit.textContent = "edit";
                console.log(guest);
            }
        }
    }
    newLi.appendChild(newEdit);

    /********* BOTON ELIMINAR ***********/
    var newRemove = document.createElement("button");
    newRemove.textContent = "remove";

    newRemove.onclick = function() {
        if (newRemove.onclick && newRemove.textContent == "CONFIRM") {
            newRemove.parentElement.remove();
            delGuest(newSpan.textContent);
        }
        newRemove.style.backgroundColor = "red";
        newRemove.textContent = "CONFIRM";
        let newCross = document.createElement("button");
        newCross.textContent = "x";

        newCross.onclick = function() {
            newRemove.style.backgroundColor = "rgba(88, 183, 205, .5)";
            newRemove.textContent = "remove";
            newCross.style.display = "none";
        }
        newLi.appendChild(newCross);
    }
    newLi.appendChild(newRemove);
    document.getElementById("invitedList").appendChild(newLi);
}

/********* OCULTAR INVITADOS (CHECKBOX) ***********/
document.getElementById("confirm").onclick = function() {

    var hide = false;
    var li = document.getElementsByTagName("li");

    if (document.getElementById("confirm").checked) {
        for (let c = 0; c < li.length; c++) {
            var x = li[c].getElementsByTagName("label")[0].getElementsByTagName("input");
            if (!x[0].checked) {
                li[c].style.display = 'none';
                hide = true;
            }
        }
    } else {
        for (let c = 0; c < li.length; c++) {
            li[c].style.display = 'block';
            hide = false;
        }
    }
}