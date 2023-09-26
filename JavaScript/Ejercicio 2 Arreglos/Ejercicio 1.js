// 1. Crear un array vacío, luego generar 10 números al azar y guardarlos en un array. Mostrar en consola el
// resultado del array.

Random1 = [];



for (let i = 0; i < 10; i++){

    let random = Math.random();
        random = random * 10 + 1;
        random = Math.trunc(random);
        Random1[i] = random;

}

alert("El arreglo es " + Random1);
