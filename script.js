
/*alert("Bienvenida y bienvenido a nuestro sitio web");
let numeroSecreto = 6;


let numeroDeVentas = 50;
let saldoDisponible = 1000;
//alert("Error! completa todos los campos!");
let mensajeDeError = "¡Error! Completa todos los campos";
//alert(mensajeDeError);

let nombre = prompt ("Ingresa tu nombre:");

*/

//para interactuar con el usuario
let numeroMaximoPosible = 100;
let numeroSecreto = Math.floor (Math.random()*numeroMaximoPosible) +1;

let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = "vez";
let maximosIntentos = 3;
while (numeroSecreto != numeroUsuario) {
    let numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${numeroMaximoPosible} por favor?: `));
   

    if (numeroSecreto == numeroUsuario) {
        //aca concatenamos template string 
        alert(`Acertaste, el numero es ${numeroUsuario}, lo hiciste en ${intentos} ${intentos == 1 ? "vez" : "veces"}!`);
    }
    else {
        if (numeroUsuario > numeroSecreto) {
            alert("El número secreto es menor");
        }
        else {
            alert("El numero secreto es mayor");
        }
        // incrementamos el contador cuando no acierta
        //intentos = intentos + 1;
        //intentos += 1;
        intentos++;

       // palabraVeces = "veces";
        if (intentos>maximosIntentos){
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
            break;
        }
        //alert("Lo siente, no acertaste el número");
    }
}
/*para interactuar con el usuario
let edad = prompt("Me indicas tu edad por favor?: ");
console.log(edad);

if(edad >= 18 ){
    alert("¡Puedes obtener tu licencia de conducir!");
}
*/


//1.Crea una función que calcule el índice de masa corporal (IMC) de una persona 
//a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.

function calcularIMC(altura, peso) {
  var imc = peso / (altura * altura);
  return imc;
}
//2.Crea una función que calcule el valor del factorial de un número pasado como parámetro.

function calcularFactorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    return numero * calcularFactorial(numero - 1);
  }
}
// Ejemplo de uso
let num = 5;
let resultado = calcularFactorial(numero);
console.log(`El factorial de ${num} es ${resultado}`);
//3.Crea una función que convierta un valor en dólares, pasado como parámetro,
// y devuelva el valor equivalente en reales. Para esto, considera la cotización del dólar igual a R$4,80.

function convertirDolaresAReales(dolares) {
  var cotizacionDolar = 4.80;
  var reales = dolares * cotizacionDolar;
  return reales;
}
// Ejemplo de uso
let valorEnDolar = 50;
let valorEnReales = convertirDolaresAReales(valorEnDolar);
console.log(`${valorEnDolar} dólares  es R$ ${valorEnReales}`);
//4.Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, 
//utilizando la altura y la anchura que se proporcionarán como parámetros.

function calcularAreaYPerimetroRectangular(altura, anchura) {
  var area = altura * anchura;
  var perimetro = 2 * (altura + anchura);
  console.log("Área: " + area);
  console.log("Perímetro: " + perimetro);
}
// Ejemplo de uso
let altura = 3; // en metros
let anchura = 5; // en metros
calcularAreaYPerimetroRectangular(altura, anchura);

//5.Crea una función que muestre en pantalla el área y el perímetro de una sala circular, 
//utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

function calcularAreaYPerimetroCircular(radio) {
  var pi = 3.14;
  var area = pi * radio * radio;
  var perimetro = 2 * pi * radio;
  console.log("Área: " + area);
  console.log("Perímetro: " + perimetro);
}
// Ejemplo de uso
let radio = 4; // en metros
calcularAreaYPerimetroCircular(radio);
//6.Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

function mostrarTablaDeMultiplicar(numero) {
  for (var i = 1; i <= 10; i++) {
    var resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);
  }
}
// Ejemplo de uso
let numero = 7;
mostrarTablaDeMultiplicar(numero);


//Crea una lista vacía con el nombre listaGenerica.
let listaGenerica = [];
//Crea una lista de lenguajes de programación llamada lenguagesDeProgramacion.
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
//Agrega a la lista lenguagesDeProgramacion los siguientes elementos.
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');
//Crea una función que muestre en la consola todos los elementos de la lista lenguagesDeProgramacion por separado.
function mostrarLenguagesSeparadamente() {
  for (let i = 0; i < lenguagesDeProgramacion.length; i++) {
    console.log(lenguagesDeProgramacion[i]);
  }
}

mostrarLenguagesSeparadamente();
//Crea una función que muestre en la consola todos los elementos de la lista lenguagesDeProgramacion de manera inversa.
function mostrarLenguagesReversoSeparadamente() {
  for (let i = lenguagesDeProgramacion.length - 1; i >= 0; i--) {
    console.log(lenguagesDeProgramacion[i]);
  }
}

mostrarLenguagesReversoSeparadamente();
//Crea una función que calcule la media de los elementos en una lista de números.
function calcularMedia(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma / lista.length;
}

let numbers = [10, 20, 30, 40, 50];
let media = calcularMedia(numbers);
console.log('Média:', media);
//crea una función que muestre en la consola el número mayor y menor en una lista.
function encontrarMayorMenor(lista) {
  let mayor = lista[0];
  let menor = lista[0];

  for (let i = 1; i < lista.length; i++) {
    if (lista[i] > mayor) {
      mayor = lista[i];
    }
    if (lista[i] < menor) {
      menor = lista[i];
    }
  }

  console.log('Mayor:', mayor);
  console.log('Menor:', menor);
}

let numeritos = [15, 8, 25, 5, 12];
encontrarMayorMenor(numeritos);
//Crea una función que retorne la suma de todos los elementos en una lista.
function calcularSuma(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma;
}

let numeros = [15, 8, 25, 5, 12];
let suma = calcularSuma(numeros);
console.log('Suma:', suma);
//Crea una función que reciba una lista como parámetro y 
//retorne el índice de un elemento también pasado como parámetro. 
//Si ese elemento no existe en la lista, retorna -1.
function encontrarIndiceElemento(lista, elemento) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] === elemento) {
      return i; // Retorna el índice del elemento encontrado
    }
  }
  return -1; // Retorna -1 si el elemento no se encuentra en la lista
}
