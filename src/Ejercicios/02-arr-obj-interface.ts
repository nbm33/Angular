
/*
    ===== Código de TypeScript =====
*/

let habilidades: (boolean | string | number)[]= ["perr", "gato", 100];

habilidades.push(100);

interface Personaje{
    nombre: string;
    hp: number;
    Habilidades: string[];
    PuebloNatal?: string;
}

const personaje: Personaje = {
    nombre: "Nicolas",
    hp: 100,
    Habilidades: ["correr", "nadar", "bici"]
}

personaje.PuebloNatal = "Bogotá";

console.table( personaje );