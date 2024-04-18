/*DATO:
 - las importaciones aplican destructuracion, hasta en angular, ten en cuenta eso
 */
import { Product, taxCalculationD} from "./06-fn-destructuring"



const tax  : number = 0.15
const shoppingCar: Product[] = [
    {
        description: 'Samsung A30',
        price: 999.9
    },
    {
        description: 'iPad Air',
        price: 249.9
    }
];



const [ total , taxf ] = taxCalculationD( {
    products : shoppingCar,
    tax  
} );

console.log('Total - importado', total)
console.log('Tax - importado', taxf)

/*
    DATO: 
        - cuando exportas, evita hacer logica como console.log() o declarar e inicializar vairables, pues al importarlo, eso se ejecuta, y afecta a la memoria, pro ejemplo
            mira la consola del navegador, salen dos tipos registro
*/

