

export interface Product {
    description : string;
    price : number
}

const phone : Product  = {
    description : 'Samsung A30',
    price : 999.9
}

const table : Product  = {
    description : 'iPad Air',
    price : 249.9
}


// variables ***
const shoppingCar = [phone, table];
const tax = 0.15;

//es un tipo DTO,  => segun yo
interface taxtCalculationOptions {
    products : Product[]
    tax : number;
}


//----------------------------------------EJERCICIO SIN DESTRUTURACION---------------------------------------

function taxCalculation( options:taxtCalculationOptions ) : number[] {
    let total = 0;

    options.products.forEach( (p : Product) => {
        total+=p.price;
    })
    return [total,options.tax*total]
}

const result = taxCalculation( {
    products : shoppingCar,
    tax : tax // o solo "tax", pues en ECMAscript 6 que dice que si cuya propiedad es identico a la variable, en nombre, solo ponemos uno  
} );

console.log('Total', result[0])
console.log('Tax', result[1])
//---------------------------------------------------------------------------------------------------------



//----------------------------------------EJERCICIO CON DESTRUTURACION---------------------------------------
                                                             //esto es una TUPLA, para especificar que el array sera de tamaño fijo y tipo especifico interno
// function taxCalculationD( {tax , products}:taxtCalculationOptions ) : [number , number] {  // no combiene, pues puede que tengamos mas variables por destructurar y no mejora la lectura de los parametros del metodo
export function taxCalculationD( options :taxtCalculationOptions ) : [number , number] {
    
    const {tax , products } = options; //la destructuracion en un metodo es mejor de manera interna 
    let total = 0;

    products.forEach( ( { price } ) => {
        total+=price;
    })
    return [total, tax*total]
}

const [ total , taxf ] = taxCalculationD( {
    products : shoppingCar,
    tax : tax 
} );

console.log('Total', total)
console.log('Tax', taxf)
//---------------------------------------------------------------------------------------------------------


// export {}



/*
DATO: 
 -la destructuracion en un metodo es mejor de manera interna;

 - las importaciones aplican destructuracion, hasta en angular, ten en cuenta eso

*/