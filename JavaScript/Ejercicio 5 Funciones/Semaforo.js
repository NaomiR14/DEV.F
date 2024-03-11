// Deberas realizar un semáforo utilizando JS.
// El semáforo deberá cambiar de luz de Verde a Amarilla y de Amarilla a Roja y luego de nuevo a Verde.
// Puedes mostrar la imagen del semáforo cambiando, hacer el cambio con console.log o con alert.
// Se debe respetar el orden de los colores:
// De rojo pasa a Verde.
// De amarillo puede pasar a Rojo.
// De Verde pasa a Amarillo.

document.write("<img src='verde.png' >");
document.write("<img src='Rojo.png' >");
document.write("<img src='Amarillo.png' >");

function imprimeHola() {

    console.log('Hola'); 

}



function detente(intervalo) {

    clearInterval(intervalo);

    console.log('Listo!');

}

        var intervalo = setInterval(imprimeHola(),1000); 

setTimeout(detener(intervalo),5000); 
