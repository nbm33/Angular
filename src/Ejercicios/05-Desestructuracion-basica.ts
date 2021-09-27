
/*
    ===== Código de TypeScript =====
*/


interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: "Mes",
    detalles: {
        autor: "Ed Sheran",
        anio: 2015,
    } 
}
//Forma 1 Desestructurar

console.log("El volumen actual es de: ", reproductor.volumen);
console.log("El Segundo actual es de: ", reproductor.segundo);
console.log("El Canción actual es de: ", reproductor.cancion);
console.log("El Autor es: ", reproductor.detalles.autor);

//Forma 2 Desestructurar

const {volumen: vol, segundo, cancion, detalles} = reproductor;
const {autor} = detalles;

console.log("El volumen actual es de: ", vol);
console.log("El Segundo actual es de: ", segundo);
console.log("El Canción actual es de: ", cancion);
console.log("El Autor es: ", autor);


const dbz: string[] = ["Goku", "Vegeta", "Trunks"]

//Forma 1 Desestructurar
console.log("Personaje 1 ", dbz[0]);
console.log("Personaje 2 ", dbz[1]);
console.log("Personaje 3 ", dbz[2]);

//Forma 2 Desestructurar

const [, p2, p3] = dbz;

console.log("Personaje 2 ", p2);
console.log("Personaje 3 ", p3);

