const fs = require('fs');

class Archivo{
    constructor(fileName){
        this.fileName = fileName
    };

    async leer(){
        try{
            const products = await fs.promises.readFile(this.fileName, 'utf-8');
            return JSON.parse(products);
        }
        catch (err) {
            return []
        }
    };

    async guardar(product){
        const prodsArray = await this.leer(); //Cada vez que guardo un producto me traigo todos los existentes en un array
        product.id = prodsArray.length + 1; // Genero y asigno atributo id al nuevo producto
        prodsArray.push(product); // Guardo el nuevo producto en el array de productos
        try{
            await fs.promises.writeFile(this.fileName, JSON.stringify(prodsArray, null, '\t')); // Envio array de productos
        }
        catch (err){
            console.log(err)
        }
    };

    async borrar(){
        try {
            await fs.promises.unlink(this.fileName);
        } catch (err) {
            console.log(`No se pudo borrar el archivo: ${err}`);
        }
    };
};

const testing = async () =>{

    const archivo = new Archivo('productos.txt'); //instancio el archivo

    // Genero los productos a crear en constantes
    const producto1 = {
		title: "Samsung-s8",
		price: 70000,
		thumbnail: "https://celulares.com/Samsung-s8.jpg"
    };
    const producto2 = {
        title: "Nokia-1100",
		price: 5500,
		thumbnail: "https://celulares.com/Nokia-1100.jpg"
    };
    const producto3 = {
        title: "Xiami-A1",
		price: 30000,
		thumbnail: "https://celulares.com/Xiami-A1.jpg"
};

archivo.borrar() //Testeo el aviso que no encuentra archivo a borrar

console.log(await archivo.leer());
await archivo.guardar(producto1);
await archivo.guardar(producto2);
console.log(await archivo.leer());
await archivo.guardar(producto3);
console.log(await archivo.leer());

};

testing();
