let edad;
let embarazada;
let fronterizo;
let semanasEmbarazo;

edad = parseInt(prompt("Ingresa tu edad"));
embarazada = prompt("Estas embarazada? (Si/No)").toLowerCase() === "si";
fronterizo = prompt("Vives en un Municipio de la frontera? (Si/No)").toLowerCase() === "si";


if (embarazada){

    semanasEmbarazo = Number(prompt("Cuantas semanas de gestacion tienes"));

}

if (embarazada === true && semanasEmbarazo >= 9){

    console.log("Si te puedes vacunar, por estar embarazada y contar con +9 semanas.")

}else if(edad >= 18 && fronterizo === true){

    console.log("Si te puedes vacunar, por ser mayor de edad y vivir en un municipio fronterizo.")

}else if(edad >= 30){

    console.log("Si te puedes vacunar, por cumplir o tener +30 este año");

} else {
    console.log("Lo sentimos, aun no te puedes vacunar.")
}


