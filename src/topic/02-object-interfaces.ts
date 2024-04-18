
const skills : string[] = ['Bash','Counter', 'Healing']


interface Character {
    name : string;
    hp : number;
    skills : string[];
    hometown? : string;
}

/*
objeto literal, que usa la interfaz solo para los tipos de datos
pues, un objeto literal no puede definir el tipo de manera interna,
por eejmplo:
const strider = {
    name : string : 'strider'
} INCORRECTO
usamos la interfaz para eso, y controlar el tipado, o hay otra forma 
*/
//FORMA 1 : obj literal usando interfaz----------------------------------------------
const strider : Character = {
    name : 'strider',
    hp : 100,
    skills : ['Bash', 'Counter']
}
// strider.hometown='Perú'

console.table(strider)


//FORMA 2 : OBJETO LITERAL, SIN USAR INTERFAZ, pero practicamente es lo mismo----------
const persona : {name?  : string, hp: number } = { name : 'Daniel', hp: 100 }
persona.name = 'Maria'


const p2 = persona;
p2.name = 'Josefina' //cuidado con la mutabilidad;

// DATO: puedes usar const p2 = {...persona}; para que apunte a otra referencia
console.table(persona)
console.table(p2)

/*transformas el aarchivo en un modulo, para que no haya confilto
 con las variables de otros modulos sobre este*/
export {};
