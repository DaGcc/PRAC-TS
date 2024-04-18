let name : string = 'Daniel';
// let hpPoints : number | string = 95; o 
let hpPoints : number | 'FULL' = 95;
hpPoints = 'FULL';


const isAlive : boolean = true


console.log({
    name, hpPoints, isAlive
})


/*transformas el aarchivo en un modulo, para que no haya confilto
 con las variables de otros modulos sobre este*/
export {};
