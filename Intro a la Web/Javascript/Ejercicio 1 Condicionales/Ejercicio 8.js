//8. Solicitar al usuario una calificación (entre 1 y 10). Luego se debe comprobar que el número 
//efectivamente esté en ese rango, si no lo está imprima un mensaje de error. Si lo está, imprima “reprobado” 
//si la calificación es inferior a 6, “regular” si está entre 6 y 8, “bien” si es 9, y por último, 
//“excelente” si es 10.

let number = Number(prompt("Ingrese un un número (entre 1 y 10)"));



if (number > 10 || number == 0 ){

    alert(number + " Error, numero fuera de rango 1-10 ");
    
}else if (number < 6 ) {

    alert(" Reprobado con " + number);

}else if (number >= 6 && number <= 8 ){
 
    alert(" Regular con " + number);

}else if (number == 9 ){
 
    alert(" Bien con " + number);

}else{
 
    alert(" Excelente con " + number);

}