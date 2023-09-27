// 4. Crea un programa que solicite al usuario letras o palabras, si es así guardar 
// el resultado. Para terminar de capturar el usuario no debe escribir valor alguno. Al terminar de capturar, 
// mostrar en pantalla la concatenación de todas las palabras capturadas.

let Palabras;
Array = [];

do{

    Palabras = prompt("Escribe letras o palabras y  no escribas nada para finalizar el programa");



    Array.push(Palabras);
   
     document.write("Los numeros introducidos fueron " + Array);

    

}while (Palabras != null)

 document.write("Las palabras introducidas fueron " + Array);
