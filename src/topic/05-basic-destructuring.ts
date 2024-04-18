interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song : string;
    details : Details
}

interface Details {
    autor : string;
    year : number;
}



let audioPlayer :  AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "YTD - pain",
    details: {
        autor : 'ytd',
        year : 2022
    }
}

//--------------------------DESTRUCTURACION CON OBJETOS----------------------------------
//sin destructuracion 
console.log("volumen : "+ audioPlayer.audioVolume);
console.log("song : "+ audioPlayer.song);
console.log("song duration : "+ audioPlayer.songDuration);


//con destructuracion 
let song : string = "new music" 
        // por si esto afecta a la destructuracion, es decir dos variables con el mismo nombre
const { song : musica, songDuration, details } = audioPlayer
        //propiedad_interfaz : variable_usable
console.log("song : "+ musica);
console.log("song duration : "+ songDuration);

let { autor } = details //audioPlayer.details
console.log( "autor"+ autor )
//----------------------------------------------------------------------------------------


//-------------------------- DESTRUCTURACION CON ARREGLOS --------------------------------
//sin destructuraccion
const dbz : string[] = ['Goku','Vegeta','Trunk']
console.log('Personaje 3', dbz[2])

//con destructuracion
const [ , ,p3 ] : string[] = ['Goku','Vegeta','Trunk',]
console.log('Personaje 3', p3)

//igual que el caso anterior pero controlando si no existe en sa posicion
const [ , , pp3 = "Not found - default value" ] : string[] = ['Goku','Vegeta']
console.log('Personaje 3', pp3)

/*transformas el aarchivo en un modulo, para que no haya confilto
 con las variables de otros modulos sobre este*/
 export {};

 /*DATO:
   - las importaciones aplican destructuracion, hasta en angular, ten en cuenta eso (mira el 07)
 */