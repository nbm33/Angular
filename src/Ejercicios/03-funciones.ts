
/*
    ===== Código de TypeScript =====
*/

function sumar(a:number, b:number): number{
    return a + b; 
}

const sumarFlecha = (a:number, b:number): number => {
    return a + b; 
}

const resultado1 = sumar(3,4);

function multiplicar(numero: number, otroNumero?: number, base: number = 2): number{
    return numero * base ; 
}

const resultado2 = multiplicar(3,0,10);

interface PersonajeLOR {
    nombre:string;
    pv:number;
    mostrarHP: () => void;
}

function curar(personaje: PersonajeLOR, curarX:number): void{
    personaje.pv += curarX;
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: "Nicolas",
    pv:50,
    mostrarHP() {
        console.log('puntos de vida', this.pv);
    }
}

curar(nuevoPersonaje,20)
nuevoPersonaje.mostrarHP();

console.log(resultado1);
console.log(resultado2);