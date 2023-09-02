//5. Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. 
//No considerar el caso en que ambos números son iguales.


let number = Number(prompt("Escribe un número"));

let number2 = Number(prompt("Escribe un segundo número"));

if (number < number2 ){

    alert(number + " Tu primer numero es el menor");
}else {

    alert(number2 + " Tu segundo numero es el menor");

}