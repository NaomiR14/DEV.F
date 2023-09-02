// 11. Realizar un programa que ayude a calcular el total a pagar de acuerdo a la distancia recorrida por un vehículo 
// con cargo extra por los litros consumidos, tomando en consideración lo siguiente:
// Si el vehículo es “coche”, el precio kilometro ha de ser 0.20, si es “moto” ha de ser 0.10 y si es “autobús” 0.5.
// Si los litros consumidos están entre 0 y 100 se ha de añadir 5 al costo total,  si es mayor la cantidad de litros consumidos se ha de añadir 10 al total. 
//Considere qué:
//total a pagar = (precio kilometro x kms recorridos) + extra por litros consumidos.


let vehiculo = prompt("Cual es el vehiculo que rentaste (coche, moto, autobus)? ").toLocaleLowerCase();



if (vehiculo == "coche" ){

    var distancia = Number(prompt("Cual es la distancia total recorrida en Km? "));
    var litros = Number(prompt("Cual es la cantidad de litros que consumiste? "));

    if (litros == 0 || litros <= 100 ){

        alert("El precio a pagar por Km y litro en auto es " + ((distancia * 0.20) + 5));

    } else if (litros > 100){

        alert("El precio a pagar por Km y litro en auto es " + ((distancia * 0.20) + 10));

    }else{

        alert("Al parecer escribiste una opcion invalida porfavor intenta de nuevo. ");
    }

}else if (vehiculo == "moto" ){

    var distancia = Number(prompt("Cual es la distancia total recorrida en Km? "));
    var litros = Number(prompt("Cual es la cantidad de litros que consumiste? "));

    if (litros == 0 || litros <= 100 ){

        alert("El precio a pagar por Km y litro en moto es " + ((distancia * 0.10) + 5));

    } else if (litros > 100){

        alert("El precio a pagar por Km y litro en moto es " + ((distancia * 0.10) + 10));

    }else{

        alert("Al parecer escribiste una opcion invalida porfavor intenta de nuevo. ");
    }

}else if (vehiculo == "autobus" ){

    var distancia = Number(prompt("Cual es la distancia total recorrida en Km? "));
    var litros = Number(prompt("Cual es la cantidad de litros que consumiste? "));

    if (litros == 0 || litros <= 100 ){

        alert("El precio a pagar por Km y litro en autobus es " + ((distancia * 0.5) + 5));

    } else if (litros > 100){

        alert("El precio a pagar por Km y litro en autobus es " + ((distancia * 0.5) + 10));

    }else{

        alert("Al parecer escribiste una opcion invalida porfavor intenta de nuevo. ");
    }

}else {

    alert("Al parecer escribiste una opcion invalida porfavor intenta de nuevo. ");
}



