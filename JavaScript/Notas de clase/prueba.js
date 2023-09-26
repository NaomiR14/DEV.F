// let edad = 25;
// if(edad>=18){
// //let mensaje = "Es adulto" //Error  is not defined 
// let edad = "Es adulto"; //Error ya esta declarado
// //edad =  "Es adulto" // se puede
// }
// console.log(edad)

var arreglo = [];
var userInput;
while(!(userInput=="")){
    userInput=prompt("Ingresa");
    arreglo.push(userInput);
}
console.log("values"+arreglo);