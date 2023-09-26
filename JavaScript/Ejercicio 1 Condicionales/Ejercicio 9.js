//  9. Escribe un programa que responda a un usuario que quiere comprar un helado en una conocida marca de 
// comida rápida cuánto le costará en función del topping que elija.
// El helado sin topping cuesta 50 MXN.
// El topping de oreo cuesta 10 MXN.
// El topping de KitKat cuesta 15 MXN.
// El topping de brownie cuesta 20 MXN.
// En caso de no disponer del topping solicitado por el usuario, el programa le indicará “no tenemos este topping, 
// lo sentimos.” y a continuación le informará el precio del helado sin ningún topping.

let topping = prompt("Quieres tu helado con topping? ").toLocaleLowerCase() === "si";



if (topping == false ){

    alert("El helado sin topping cuesta 50 MXN");

}else {

    let topping2 = prompt("Que topping deseas? (oreo, KitKat, brownie ) ").toLocaleLowerCase();
    
    if (topping2 == "oreo"){

        alert("El topping de oreo cuesta 10 MXN. y el total seria de 60 MXN");
    } else if (topping2 == "kitkat"){

        alert("El topping de KitKat cuesta 15 MXN. y el total seria de 65 MXN");
    }else if (topping2 == "brownie"){

        alert("El topping de brownie cuesta 20 MXN. y el total seria de 70 MXN");
    }else {
        alert("no tenemos este topping lo sentimos pero El helado sin topping cuesta 50 MXN");
    }

}