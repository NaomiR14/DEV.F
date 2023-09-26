//Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.

let num1 = Number (prompt("Ingresa el primer numero"));
 
let num2 = Number (prompt("Ingresa el primer numero"));
 
let num3 = Number (prompt("Ingresa el primer numero"));


if (num1 > num2 && num1 > num3 ){

    console.log("El numero " + num1 + " es el mayor");


}else if (num2 > num3 ){

    console.log("El numero " + num2 + " es el mayor");


} else {

    console.log("El numero " + num3 + " es el mayor");
}

if (num1 == num2 ){

    console.log("El numero 1 es igual a numero 2");

} else if (num2 == num3) {

    console.log("El numero 2 es igual a numero 3");

}else if (num1 == num3){

    console.log("El numero 1 es igual a numero 3");

}


