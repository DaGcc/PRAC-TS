/*
    ===== Código de TypeScript =====
*/


interface SuperHero {

    //propiedades
    name: string,
    age: 30,
    address: Address,

    
    //metodo abstracto
    showAddress() :  string // o showAddress : () => void, pero sera considerado como una propiedad y no como un metodo lo cual te puede traer errores,
}                                                                                        // como el llamado con "." y/o la ejecucion del tipado mismo   
    
interface Address {
    street: string,
    country: string,
    city: string,
}

const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}


const address = superHeroe.showAddress();
console.log(address);




export { };