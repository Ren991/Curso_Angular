// exportacion es modularizar las funciones para que puedan usarse en otros archivos.

import { Product , taxCalculation } from "./06-function-destructuring";


const shoppingCart: Product[]=[
    {
        description:"nokia",
        price:100
    },
    {
        description:"Ipad",
        price:150
    }
]

const [total, tax] = taxCalculation({
    products:shoppingCart,
    tax: 0.15
});

console.log("Total",total);
console.log("Tax",tax);