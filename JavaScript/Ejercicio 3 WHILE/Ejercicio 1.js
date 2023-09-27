// 1. Crea un programa que pregunte al usuario un número. Mostrar los números que son múltiplos 
// de 5 desde 1 hasta el número introducido por el usuario.


let number = Number(prompt("Escribe un numero para comenzar"));
var multiplo = 1;

while (multiplo <= number){

    if(multiplo % 5 == 0){
        document.write(multiplo + ",");
    }

    multiplo = multiplo + 1;

}