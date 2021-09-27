
/*
    ===== Código de TypeScript =====
*/

export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: "Nokia A1",
    precio: 150,
}

const tableta: Producto = {
    desc: "ipad air",
    precio: 350,
}

export function calculaIVA(productos: Producto[]): [number,number]{
    
    let total = 0;

    productos.forEach( ( {precio} ) => {
        total += precio;
    }
    )
    return [total, total*0.15];

}

const listaProductos = [telefono,tableta];

const [total,isv] = calculaIVA(listaProductos);

console.log ("El valor toal es: ", total)
console.log ("El Iva sobre productos es: ", isv)