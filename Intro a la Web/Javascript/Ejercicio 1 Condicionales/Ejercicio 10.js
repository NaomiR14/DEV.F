// 10. Un conocido portal de educación en tecnología está ofreciendo programas para aprender a 
// desarrollar aplicaciones. Escribe un programa que le indique a la persona interesada cuánto deberá pagar 
// mensualmente de acuerdo a la opción elegida.
// El programa educativo contempla 3 diferentes niveles, cada uno con su costo mensual: 
// Course: $4999 MXN
// Carrera $3999 MXN
// Master: $2999 MXN
// Adicionalmente preguntar si cuenta con alguna beca y aplicar el descuento correspondiente al precio final.
// Beca Facebook: 20% de descuento.
// Beca Google: 15% de descuento.
// Beca Jesua: 50% de descuento.
// Finalmente, además del precio mensual con descuento, indicar al usuario cuánto gastaría en total por el 
// curso elegido, tomando en cuenta las siguientes duraciones:
// Course: 2 meses
// Carrera 6 meses
// Master: 12 meses


let Course = 4999 ;
let Carrera = 3999 ;
let Master = 2999 ;

let DuracionCourse = 2;
let DuracionCarrera = 6 ;
let DuracionMaster = 12 ;

let DescuentoF = 0.8;
let DescuentoG = 0.85 ;
let Descuentoj = 0.5 ;

let beca = prompt("Cuentas con alguna beca? ").toLowerCase();


if (beca == "no" )
{

    let Nobeca = prompt("En que programa estas interesado? (course, carrera o master) ").toLowerCase();
   

    if (Nobeca == "course"){

        alert("El costo es de " + Course + " mensual con un duracion de " + DuracionCourse + " y el total seria de " + (Course*DuracionCourse) + " MXN");

    } else if (Nobeca == "carrera"){

        alert("El costo es de " + Carrera + " mensual con un duracion de " + DuracionCarrera + " y el total seria de " + (Carrera*DuracionCarrera) + " MXN");

    }else if (Nobeca == "master"){

        alert("El costo es de " + Master + " mensual con un duracion de " + DuracionMaster + " y el total seria de " + (Master*DuracionMaster) + " MXN");

    }else {
        alert("Eleccion no valida, porfavor escoge alguna de nuestras opciones");
    }



}else if (beca == "si" ) {
 

    let tipoBeca = prompt("Que beca tienes? (Facebook, Google o Jesua) ").toLowerCase();

    if (tipoBeca == "google"){

        var programas = prompt("En que programa estas interesado? (course, carrera o master) ").toLowerCase();
       
        if (programas == "course"){

            alert("La beca es del 15%" + "El costo es de " + Course + " mensual con un duracion de " + DuracionCourse + " y el total seria de " + (Course*DuracionCourse*DescuentoG) + " MXN");
    
        } else if (programas == "carrera"){
    
            alert("La beca es del 15%" +"El costo es de " + Carrera + " mensual con un duracion de " + DuracionCarrera + " y el total seria de " + (Carrera*DuracionCarrera*DescuentoG) + " MXN");
    
        }else if (programas == "master"){
    
            alert("La beca es del 15%" +"El costo es de " + Master + " mensual con un duracion de " + DuracionMaster + " y el total seria de " + (Master*DuracionMaster*DescuentoG) + " MXN");
    
        }else {
            alert("Eleccion no valida, porfavor escoge alguna de nuestras opciones");
        }
    

    } else if (tipoBeca == "facebook"){
        var programas = prompt("En que programa estas interesado? (course, carrera o master) ").toLowerCase();

        if (programas == "course"){

            alert("La beca es del 50%" + "La beca es del 20%" + "El descuento es de costo es de " + Course + " mensual con un duracion de " + DuracionCourse + " y el total seria de " + (Course*DuracionCourse*Descuentoj) + " MXN");
    
        } else if (programas == "carrera"){
    
            alert("La beca es del 50%" +  "El costo es de " + Carrera + " mensual con un duracion de " + DuracionCarrera + " y el total seria de " + (Carrera*DuracionCarrera*DescuentoF*Descuentoj) + " MXN");
    
        }else if (programas == "master"){
    
            alert("La beca es del 50%" + "El costo es de " + Master + " mensual con un duracion de " + DuracionMaster + " y el total seria de " + (Master*DuracionMaster*DescuentoF*Descuentoj) + " MXN");
    
        }else {
            alert("Eleccion no valida, porfavor escoge alguna de nuestras opciones");
        }
    

    } else if (tipoBeca == "jesua"){
        var programas = prompt("En que programa estas interesado? (course, carrera o master) ").toLowerCase();

        if (programas == "course"){

            alert("El costo es de " + Course + " mensual con un duracion de " + DuracionCourse + " y el total seria de " + (Course*DuracionCourse) + " MXN");
    
        } else if (programas == "carrera"){
    
            alert("El costo es de " + Carrera + " mensual con un duracion de " + DuracionCarrera + " y el total seria de " + (Carrera*DuracionCarrera) + " MXN");
    
        }else if (programas == "master"){
    
            alert("El costo es de " + Master + " mensual con un duracion de " + DuracionMaster + " y el total seria de " + (Master*DuracionMaster) + " MXN");
    
        }else {
            alert("Eleccion no valida, porfavor escoge alguna de nuestras opciones");
        }
    

    }else {
        alert("Eleccion no valida, porfavor escoge alguna de nuestras opciones");
    }

} else {
    alert("Eleccion no valida, porfavor escoge alguna de nuestras opciones");
}