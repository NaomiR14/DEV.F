// 3. Crea un programa que solicite al usuario números, si lo que este introduce es un número 
// guardarlo en un arreglo. Para terminar el capturar el usuario debe ingresar el número 0. Finalmente 
// mostrar la lista de números capturados en pantalla o en la consola.


let number1;
Array = [];

while (number1 != 0){

    number1 = Number(prompt("Escribe un numero y el numero 0 para finalizar el programa"));
    

    Array.push(number1);
   
    // document.write("Los numeros introducidos fueron " + Array);

    

}

 document.write("Los numeros introducidos fueron " + Array);

