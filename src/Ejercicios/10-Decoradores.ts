
/*
    ===== Código de TypeScript =====
*/



// Un decorador es una función con unos atributos y se implementa con @, para decirle a Angular que esa clase es un componente, servicio u otro


@reportableClassDecorator
class MiSuperClase {
    public miPropiedad: string = "ABC123"

    imprimir(){
        console.log("Hola Mundo")
    }


}

console.log( MiSuperClase );

const miClase = new MiSuperClase();

console.log( miClase.miPropiedad );



// funcion de typeScript, se busca en la libreria

function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      reportingURL = "http://www...";
    };
}


