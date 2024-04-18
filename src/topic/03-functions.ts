
//--------------------------------------------------------- FUNCIONES -------------------------------------------------------------
//FUNCION CON NOMBRE
function addNumers(a : number,  b : number ) : number{
    return a+ b;
}
const result  = addNumers( 1 ,2 )

//FUNCIONES ANONIMAS
//funcion flecha ---- son siempre FUNCION ANONIMA
let addNumbersArrow : (a : number , b : number ) => string = (a : number , b : number ) : string => {
    return `${a + b}`;
}
const result2 = addNumbersArrow(2 ,3);

//funcion con la palabra reservada"function" ---- FUNCION ANONIMA
const addNumersFunction : (a : number, b: number) => number = function(a : number , b: number) : number {
    return a + b;
}
const result3 = addNumersFunction(2,3);

console.log({ result, result2, result3 })


//FUNCION CON TRES TIPOS DE PARAMETROS
            //obligatorio    | opcional: tienes que hacer una logica | opcional pero ya no tienes que hacer logica pues ya tienes un valor inicializado
let fnParam =  (obligatorio : number, opcional? : number, opcionalConValorPorDfecto : number = 2) => {
    return obligatorio+(opcional??1)+opcionalConValorPorDfecto;
}
console.log(fnParam(2))
//------------------------------------------------------------------------------------------------------------------------------------


//------------------------------------------------ FUNCIONES CON PARAMETRO DE OBJ -----------------------------------------------------


interface Character {
    //propiedades
    name : string,
    hp : number,

    // showHp : ()  => void   // pero el problema esta en que si lo declaras asi, es considerado como una propiedad y no como metodo

    //metodos - en las interfaces son metodos abstractos
    showHp( ) : void// o tambien  showHp : ()  => void, pero el problema esta en que si lo declaras asi, es considerado como una propiedad y no como metodo
}

// class ACharacter{

//     //propiedades
//     name : string | undefined
//     hp : number | undefined

//     // metodo concreto 
//     showHp() : void{

//     }
// }

const healCharcter  = ( obj : Character, amount : number ) => {
    obj.hp += amount;
}

let strider : Character = {
    
    name : 'Strider',
    hp : 50,

    showHp() {
        console.log(`Puntos de vida ${ this.hp }`)
    }
}
healCharcter(strider, 10);
strider.showHp()
healCharcter(strider, 10);
strider.showHp()

//otra forma es mandar {...estructura...} con llaves, pero no tendremos una manipulacion como lo hacemos al crear una varialbe
healCharcter({
    hp : 10,
    name: 'new character',
    showHp() {
        console.log(`Puntos de vida ${ this.hp }`)
    }
}, 10);


//----------------------------------------------------------------------------------------------------------------------------------




///FUNCIONES CALLBACKS

///1-------------------------------- TIPO EL Promise que tiene un callback dentro de otro -------------------------------------------
///callback interno
function resolve(a : number){
    console.log(a++);
    console.log("soy funcion b")
};
 //EJECUCION 2                  ///callback que tiene al callback interno
function promise(a : number , callback : (resolve :  (a : number) => void ) => void ) {
    console.log('es mi parametro normal'+a);
    return callback( resolve ); //EJECUCION 3 del interno  
    // console.log(rc);
};

//EJECUCION 1 - le da estructura al callback
const nr = promise(2, ( resolve ) => {
    resolve(3); // tipo el resolve de Promise, donde este resolve/b es una funcion que ya tiene su estructura
    return `soy del callback: ${resolve}`;
});
console.log(nr)
//----------------------------------------------------------------------------------------------------------------------------------


//3 ----------------------------------------------------- CALLBACkS simples --------------------------------------------------------
//creando una fn con callback tipo foreach
//        [number], eso quiere decir que el array es de tamaño 1 y tipo number, es decir, tamaño y tipo especifico  => TUPLA 
let arr : number[] = [1,2,3,4]

// EJECUCION 2 : solo ejecuta esa estructura pasada por el llamado del pForEach o como se llame la fn
function pForEach<T>( array : T[], callbackFn : ( t : T, index? : number) => void ){
    
    let tmñ = array.length;
    
    for( let i: number = 0; i < tmñ; i++){
        callbackFn( array[i], i) //EJECUCION 3 : solo ejecuta la estructura pasada
    }

}

// EJECUCION 1 :  le das una estructura al callback
pForEach(arr, function(t, i){
    console.log(t + "  " + i);
})


//EXISTE OTROS CALLBACK QUE USAN DE PARAMETRO CALLBACKS, como por ejemplo el Promise, (yaa se explico, en el bloque previo a este)
//----------------------------------------------------------------------------------------------------------------------------------



/*transformas el aarchivo en un modulo, para que no haya confilto
 con las variables de otros modulos sobre este*/
 export {};

/*
DATO: 
    - toda funcion en js por defecto retorna undefined
    - para hacer funciones con callbacks con/sin retorno(void || T) es recomendable usar (..?) => T/void
    - si vas a usar fn dentro de interfaces o clases, se usa las funciones con nombre pero sin la function si no asi = fn().. ya depende si es concreto o abstracto
*/