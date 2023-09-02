//1. Solicitar al usuario que responda a la pregunta (“¿Eres bellisimo/a?”), en caso de contestar sí, 
//responder “Ciertamente”, en caso de contestar no, responder: “No te creo”.

let pregunta = prompt("¿Eres bellisimo/a? (Si/No)").toLowerCase();

if (pregunta == "si"){

    alert("Ciertamente");
} else {
    alert("No te creo");
}

