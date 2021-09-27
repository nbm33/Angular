
/*
    ===== Código de TypeScript =====
*/

// FORMA LARGA
class Heroe {
    alterEgo: String;
    edad: number;
    nombreReal: String;

    constructor( alterEgo: string, edad: number, nombreReal: string ) {
        this.alterEgo = alterEgo;
        this.edad = edad;
        this.nombreReal = nombreReal;

    }
    
}

const ironman = new Heroe ("Ironman", 33, "Tony Stark");

console.log(ironman);

// FORMA COSRTA y HEREDAR

class PersonaNormal {

    constructor( 
        public nombre: String,
        public direccion: String) {}

}

class Heroe2 extends PersonaNormal {

    constructor( 
        public alterEgo: string,
        public edad: number, 
        public nombreReal: String) {
            super(nombreReal, "new York");
        }

}

const ironman2 = new Heroe2 ("Ironman", 45, "Tony Stark");

console.log(ironman2);






