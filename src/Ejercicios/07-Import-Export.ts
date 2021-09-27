
/*
    ===== Código de TypeScript =====
*/

import { calculaIVA, Producto } from "./06-Desestructuracion-funcion";



const carritoCompra: Producto[]= [
    {
        desc: "Telefono 1",
        precio: 100
    },
    {
        desc: "Telefono 2",
        precio: 150
    },
]; 

const [total,isv] = calculaIVA(carritoCompra);

console.log("Total", total);
console.log("IVA", isv);



