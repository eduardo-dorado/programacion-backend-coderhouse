// Declaramos mensaje de bienvenida
const mensajeBienvenida = "Hola! Este es el desafío de la clase N° 3 del curso de Programación Backend - Camada 20605";
console.log(mensajeBienvenida);

// Declaramos variables globales
let texto1 = 'primer texto de prueba';
let texto2 = 'segundo texto de prueba';
let texto3 = 'tercer texto de prueba';

// Funcion que para recibir un string, una funcion callback y el tiempo que por defecto es de 1''
function iteraPalabras(texto, callback, tiempo = 1000){
  
  let i = 0; // seteo un contador
  const palabras = texto.split(' '); // genero un array
  const temporizador = setInterval( () =>{

    // Imprimimos primer palabra del array del primer texto, se suma 1 al indice y si este es igual al largo del array sale del intervalo para ejecutarse el callback. 
    // Es por esto que, el retraso entre la última palabra del array la primero del siguiente es definido en llamado de la siguiente función.
    console.log(palabras[i]);
    i++
    if( i == palabras.length){
      clearInterval(temporizador);
      callback(palabras.length);
    };
  }, tiempo);
};

// Llamado a las funciones
iteraPalabras(texto1, largotexto1 =>
    iteraPalabras(texto2, largotexto2 =>
        iteraPalabras(texto3, largotexto3 =>{
            console.log(`Proceso finalizado`);
            console.log(`La cantidad total de palabras es de: ${largotexto1 + largotexto2 + largotexto3}`);
        },700)
    ,1500)
); // Dejamos default el tiempo