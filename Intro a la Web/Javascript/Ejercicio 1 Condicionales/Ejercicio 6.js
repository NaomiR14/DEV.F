//6. Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. 
//Considerar el caso en que 2 números sean iguales.




let number = Number(prompt("Escribe un número"));

let number2 = Number(prompt("Escribe un segundo número"));

let number3 = Number(prompt("Escribe un tercer número"));


if (number >= number2 && number >= number3){


    if (number == number2 && number2 == number3 ){

        alert(" El " + number + " es el mayor " + " Y Todos tus numeros son iguales.");

    }else if (number == number2 ){

        alert(" El " + number + " es el mayor " + " Y el numero 1 = numero 2");

    }else if (number == number3 ){

        alert(" El " + number + " es el mayor " + " Y el numero 1 = numero 3");

    }else if (number2 == number3 ){

        alert(" El " + number + " es el mayor " + " Y el numero 2 = numero 3");

    }else{

        alert(" El " + number + " es el mayor ");
    }


}else if (number2 > number3 ){

    if (number == number3 ){

        alert(" El " + number2 + " es el mayor " + " Y el numero 1 = numero 3");

    }else if (number2 == number3 ){

        alert(" El " + number2 + " es el mayor " + " Y el numero 2 = numero 3");

    }else{
        
        alert(" El " + number2 + " es el mayor ");
    }

    

}else {

    if (number == number2 ){

        alert(" El " + number3 + " es el mayor " + " Y el numero 1 = numero 2");

    }else if (number == number3 ){

        alert(" El " + number3 + " es el mayor " + " Y el numero 1 = numero 3");

    }else if (number2 == number3 ){

        alert(" El " + number3 + " es el mayor " + " Y el numero 2 = numero 3");

    }else{
        
        alert(" El " + number3 + " es el mayor ");
    }

    
}