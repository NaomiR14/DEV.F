// 2. Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente 
// mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!” solo al mostrar los
//  números indicados por el usuario.

let number1 = Number(prompt("Escribe el primer numero para comenzar entre 1 y 50"));
let number2 = Number(prompt("Escribe el segundo numero para comenzar entre 1 y 50"));
var cuenta = 1;

while (cuenta <= 50){

    document.write(cuenta + "," );
    if(cuenta == number1 || cuenta == number2){
        document.write( "¡Lotería!");
    }

    cuenta++;

}