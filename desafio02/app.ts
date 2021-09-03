async function operacion(number1:number, number2:number, operacion:string){
    let resultado: number = 0;
        if(operacion.toLowerCase() == 'suma'){ 

            await import('./suma').then( resolve =>{
                let suma = new resolve.Suma(number1, number2);
                resultado = suma.resultado();
            });
            
        } else if(operacion.toLowerCase() == 'resta'){

            await import('./resta').then( resolve =>{
                let resta = new resolve.Resta(number1, number2);
                resultado = resta.resultado();
            });
        } else {
                return 'La operación es operacion invalida';
        };
    
    return resultado;
};

async function operaciones(){

    const operacion1 = await operacion(4,20,'suma');
    console.log(operacion1);
    const operacion2 = await operacion(10,10,'resta');
    console.log(operacion2);
    const operacion3 = await operacion(10,10,'division');
    console.log(operacion3);

};

operaciones();
