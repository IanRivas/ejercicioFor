// Número mayor o menor
// Crear un programa que pregunte si se desea buscar 
// el mayor o el menor número de un conjunto. 

// Luego, preguntar entre cuántos se desea buscar.

//  Ir pidiendo ingresar uno por uno la cantidad de 
//  números que se eligió, y al finalizar mostrar el número 
//  mayor o menor de todos los ingresados según el elegido.

// si queremos mayor o menor
// preguntar cantidad
// pedimos numeros 
// mostrar numero menor o mayor 

// function buscarMayor(){}
function buscarMenor(listaDeNumeros){
    let menor = listaDeNumeros[0];
    for(let i=0 ;i < listaDeNumeros.length ; i++){
        if(menor > listaDeNumeros[i]){
            menor = listaDeNumeros[i];
        }
    }
    return menor
}
// [55,22,33,4,98]
// primer valor es el menor 55

// 55 > 22 true , menor = 22
// 22 > 33 false
// 22 > 4 true , menor = 4
// 4 > 98

// return menor 4

let mayorOMenor = prompt("¿mayor o menor?");
let cantidadNumeros = Number(prompt("cantidad de numeros?"));
let arrayDeNumeros = [];
// mientras i sea menor que la cantidadNumeros que ingresaron ejemplo 10
for(let i=0; i < cantidadNumeros; i++){
    let numero = Number(prompt(`Ingrese numero ${i+1}`));
    arrayDeNumeros.push(numero);
}

console.log(arrayDeNumeros);
if (mayorOMenor === 'mayor'){
    let mayor = buscarMayor(arrayDeNumeros);
    alert(`El numero mayor es ${mayor}`);
} else if (mayorOMenor === 'menor') {
    let menor = buscarMenor(arrayDeNumeros);
    alert(`El numero menor es ${menor}`);
}