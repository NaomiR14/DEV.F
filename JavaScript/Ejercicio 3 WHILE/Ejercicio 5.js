// 5. Crea un programa que solicite al usuario un día de la 
// semana (ej: lunes, jueves, domingo, etc). El programa mostrará un mensaje personalizado para 
// cada día de la semana por medio de un alert. Y seguirá pidiendo al usuario introducir otro día. 
// En caso de que el día introducido sea domingo mostrar al usuario el mensaje “Ve a descansar” y terminar 
// la captura de información.


let dia;
Array = [];

do{

    dia = prompt("Escribe un dia de la semana").toLowerCase();

    switch (dia) {
        case "lunes":
          alert("Lunes");
          break;
        case "martes":
            alert("martes");
          break;
        case "miercoles":
            alert("miercoles");
          break;
        case "jueves":
            alert("jueves");
          break;
        case "viernes":
            alert("viernes");
          break;
        case "sabado":
            alert("sabado");
          break;
        case "domingo":
            alert("Ve a descansar");
          break;
      }

    
    

}while (dia != "domingo")

