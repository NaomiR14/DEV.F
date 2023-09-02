//7. Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, 
//otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. 
//Si el día ingresado no es ninguno de esos, imprimir otro mensaje.


let dia = prompt("Escribe un dia de la semana").toLowerCase();

if (dia == "lunes"){

    alert(" Que flojera es lunes");
}else if (dia == "viernes") {

    alert(" Es viernes de fiesta");

}else if (dia == "sabado" || dia == "domingo") {

    alert(" Fin de semana al fin");

}else {

    alert(" Echale ganas");
}
