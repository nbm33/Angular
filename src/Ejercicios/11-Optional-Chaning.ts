
/*
    ===== Código de TypeScript =====
*/


// El signo ? indica que esa propiedad o atributo es opcional
interface Pasajero {
    nombre: string;
    hijos?: string[]
}

const pasajero1: Pasajero = {
    nombre: "Fernando"
}

const pasajero2: Pasajero = {
    nombre: "Melisa",
    hijos: ["Natalia","Gabriel"]
}

//Se debe ingresar el ?, para que no genere error cuando no hay dato de la propiedad opcional
function imprimeHijos(pasajero: Pasajero) {

    const cuantosHijos = pasajero.hijos?.length || 0;

    console.log( cuantosHijos );

}

imprimeHijos(pasajero1);
imprimeHijos(pasajero2);