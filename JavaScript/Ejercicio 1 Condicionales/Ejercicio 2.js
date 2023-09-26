//2. Solicitar al usuario un número, y determinar si es divisible entre dos o no. 
//Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm no es divisible entre 2”.

let number = Number(prompt("Escribe un numero para comenzar"));

if (number % 2 == 0){

    alert(number + " Si es divisible entre 2");
}else {

    alert(number + " No es divisible entre 2");

}
