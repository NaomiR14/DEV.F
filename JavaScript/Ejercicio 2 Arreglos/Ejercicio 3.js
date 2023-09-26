// 3. De acuerdo al array [10,40,30,20,15,5], imprime lo siguiente: El arreglo ordenado de menor a mayor,
//  muestra el número menor y el número mayor. Tip: Busca en google los métodos de JavaScript que regresan el mayor 
//  y menor elemento de un arreglo.

const numeros = [10,40,30,20,15,5];

// numeros.sort(function(a, b){return a - b}); // --> 3, 12, 23

// alert("El arreglo ordenadoi es  " + numeros );

let temp;

for (var j = 0; j < numeros.length - 1; j++){

    for (var i = 0; i < numeros.length; i++){

    document.write('<br>Entre al for en la vuelta ' + i + " Valor de numeros " + numeros [i]);

        if (numeros[i]> numeros [i+1]){

        temp = numeros[i + 1];

        document.write(' temp ' + temp);

        numeros [i + 1] = numeros [i] 

        document.write(' New numeros [i + 1] ' + numeros [i + 1]);

        numeros [i] = temp
        }
    }
    document.write(' <br> j ' + j);
}

alert(" El arreglo ordenado es  " + numeros );