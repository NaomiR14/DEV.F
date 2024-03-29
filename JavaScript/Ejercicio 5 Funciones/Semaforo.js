// Deberas realizar un semáforo utilizando JS.
// El semáforo deberá cambiar de luz de Verde a Amarilla y de Amarilla a Roja y luego de nuevo a Verde.
// Puedes mostrar la imagen del semáforo cambiando, hacer el cambio con console.log o con alert.
// Se debe respetar el orden de los colores:
// De rojo pasa a Verde.
// De amarillo puede pasar a Rojo.
// De Verde pasa a Amarillo.

// document.write("<img src='verde.png' >");
// document.write("<img src='Rojo.png' >");
// document.write("<img src='Amarillo.png' >");

const $lucesDelCirculo = document.querySelectorAll('.luces-circulo');
let contador = 0;

const mostrar = () =>{
    $lucesDelCirculo[contador].className = 'luces-circulo';
    contador ++

    if (contador > 2)
    {
        contador = 0;
    }

    const luzActual = $lucesDelCirculo[contador];
    luzActual.classList.add(luzActual.getAttribute('color'))
}

setInterval(mostrar,2000); 


