//3. Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será 
//mostrada en un Alert.

let number = Number(prompt("Escribe un numero para comenzar"));

if (number % 2 == 0){

    alert(number + " Si es par");
}else {

    alert(number + " No es par");

}