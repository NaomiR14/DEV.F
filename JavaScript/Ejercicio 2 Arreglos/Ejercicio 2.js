// 2. El usuario deberá ingresar un string con varias palabras separadas por coma en un popup y se deben convertir
//  en un array, (el usuario ingresa: '1,2,3,4,5' y se convierte en [1,2,3,4,5]). Mostrar en consola dicho resultado.



let Data;

Data = prompt("Ingresa un string y usa la , para separar tus palabras");


var CadenaSeparada = Data.split(",")

alert("La cadena separada es " + CadenaSeparada + " y la longitud del arreglo es de " + CadenaSeparada.length);

// function dividirCadena(cadenaADividir, separador) {
//     var arrayDeCadenas = cadenaADividir.split(separador);
//     document.write('<p>La cadena original es: "' + cadenaADividir + '"');
//     document.write('<br>El separador es: "' + separador + '"');
//     document.write(
//       "<br>El array tiene " + arrayDeCadenas.length + " elementos: ",
//     );
  
//     for (var i = 0; i < arrayDeCadenas.length; i++) {
//       document.write(arrayDeCadenas[i] + " / ");
//     }
//   }
  
  
//   var coma = ",";
//   dividirCadena(Data, coma);