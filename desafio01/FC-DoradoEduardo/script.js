// Declaramos mensaje de bienvenida
const mensajeBienvenida = "Hola! Este es el desafío de la clase N° 1 del curso de Programación Backend - Camada 20605";
console.log(mensajeBienvenida);

// Función Constructora
function Usuario(nombre = "", apellido = "", libros = [], mascotas = []){
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
};

// Prototype de Usuario
Usuario.prototype.getFullName = function () {
    return `${this.nombre} ${this.apellido}`;
};

Usuario.prototype.addMascota = function (mascota) {
    if (typeof(mascota) === "string") {
        this.mascotas.push(mascota);
    };
};

Usuario.prototype.getMascostas = function () {
    return this.mascotas.length;
};

Usuario.prototype.addBook = function (book, autor) {
    if (typeof(book) === "string" && typeof(autor) === "string"){
        this.libros.push({nombre: book, autor: autor});
    };
};

Usuario.prototype.getBook = function () {
    return this.libros.map((libro) => libro.nombre);
};

// Instanciamos la entidad Usuario
const usuarioUno = new Usuario("Eduardo", "Dorado");
const usuarioDos = new Usuario("Carlos", "Rivero");

// Añadimos Mascotas a cada instancia
usuarioUno.addMascota("Loro");
usuarioUno.addMascota("Perro");
usuarioDos.addMascota("Lagarto");

// Añadimos Libros a cada instancia
usuarioUno.addBook("La montaña mágica", "Thomas Mann");
usuarioDos.addBook("Lo que el viento se llevó","Margaret Mitchell");
usuarioDos.addBook("Maze Runner","James Dashner");

//Imprimimos objetos
console.log(usuarioUno);
console.log(usuarioDos);

console.log(`******* Imprimimos nombres completos *******`);
console.log(`Nombre Completo: ${usuarioUno.getFullName()}`);
console.log(`Nombre Completo: ${usuarioDos.getFullName()}`);

console.log(`******* Imprimimos cantidad mascostas de los usuarios *******`);
console.log(`Cantidad de mascotas de ${usuarioUno.getFullName()}: ${usuarioUno.getMascostas()}`);
console.log(`Cantidad de mascotas de ${usuarioDos.getFullName()}: ${usuarioDos.getMascostas()}`);

console.log(`******* Imprimimos libros en la biblioteca de los usuarios *******`);
console.log(`Libros de ${usuarioUno.getFullName()}: ${usuarioUno.getBook()}`);
console.log(`Libros de ${usuarioDos.getFullName()}: ${usuarioDos.getBook()}`);