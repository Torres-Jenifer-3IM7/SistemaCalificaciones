function calcularPromedio() {

    // Obtener los datos del formulario

    let nombre = document.getElementById("nombre").value;

    let calificacion1 = parseFloat(
            document.getElementById("calificacion1").value
            );

    let edadcita = parseFloat(
            document.getElementById("edadcita").value
            );

    let calificacion2 = parseFloat(
            document.getElementById("calificacion2").value
            );

    let calificacion3 = parseFloat(
            document.getElementById("calificacion3").value
            );


    // Validar que los datos estén completos

    if (
            nombre === "" ||
            isNaN(calificacion1) ||
            isNaN(edadcita) ||
            isNaN(calificacion2) ||
            isNaN(calificacion3)
            ) {

        document.getElementById("resultado").innerHTML =
                "Por favor, completa todos los datos.";
        return false;
    }


    // Calcular promedio

    let promedio =
            (calificacion1 + calificacion2 + calificacion3) / 3;

    if (promedio >= 9) {
        mensaje = "EXCELENTE";
    } else
    if (promedio >= 8) {
        mensaje = "MUY BIEN";
    } else
    if (promedio >= 7) {
        mensaje = "BIEN";
    } else
    if (promedio >= 6.5) {
        mensaje = "REGULAR";
    } else
    if (promedio >= 5) {
        mensaje = "DATE DE BAJA";
    } else {
        mensaje = "VETE A TURISMO O A LA 11";
    }


    document.getElementById("resultado").innerHTML =
            "<strong>Alumno:</strong> " + nombre +
            "<br><strong>Edad:</strong> " + edadcita +
            "<br><strong>Promedio:</strong> " + promedio.toFixed(2) +
            "<br><br><strong>Estatus:</strong> " + mensaje;
    return true;
}


function otro() {

    // Calcular el promedio del alumno actual

    let calculado = calcularPromedio();

    // Si los datos están incompletos, no hacer nada más

    if (calculado === false) {
        return;
    }


    // Obtener los resultados

    let resultado = document.getElementById("resultado");
    let lista = document.getElementById("listaResultados");


    // Agregar el resultado a la lista

    lista.insertAdjacentHTML(
            "beforeend",
            "<div>" + resultado.innerHTML + "</div>" +
            "<hr style='border: 2px dashed black;'>");


    // Limpiar solamente el formulario
    limpiar();
}

function limpiar() {

    document.getElementById("nombre").value = "";
    document.getElementById("edadcita").value = "";
    document.getElementById("calificacion1").value = "";
    document.getElementById("calificacion2").value = "";
    document.getElementById("calificacion3").value = "";

    // limpiar el mensaje
    document.getElementById("resultado").innerHTML = "";
}


function borrarTodo() {

    // Borrar todos los registros

    document.getElementById("listaResultados").innerHTML = "";

    // Limpiar resultado actual

    document.getElementById("resultado").innerHTML = "";

    // Limpiar formulario

    limpiar();
}

