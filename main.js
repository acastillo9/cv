const a = 12;
const b = 10;

const c = a + b;

console.log("respuesta", c);

// Challenge 1
const pesoJuan = 92;
const estaturaJuan = 1.95;

const imcJuan = pesoJuan / estaturaJuan ** 2;
console.log("IMC Juan", imcJuan);

const pesoMarcos = 78;
const estaturaMarcos = 1.69;

const imcMarcos = pesoMarcos / estaturaMarcos ** 2;
console.log("IMC Marcos", imcMarcos);

const marcosMayorImc = imcMarcos > imcJuan;
console.log("marcos tiene mayor IMC ?", marcosMayorImc);

console.log(Math.round(imcMarcos));

//prompt("ingresa un numero");
//alert("hola mundo");

const string1 = "este es un string con comillas dobles";
const string2 = 'este es un string con comillas simples';
const string3 = 'cadena 1' + " cadena 2" + ' cadena 3';

console.log(string1);
console.log(string2);
console.log(string3);

// const numero= parseInt(prompt('ingrese un numero entero'))
// console.log(numero)

// string metodos
console.log(string1.length);

const n1 = 1;
const n2 = 2;
const stringconcat = 'n1 es ' + n1 + ' y n2 es ' + n2;
console.log(stringconcat);

const stringliteral = `n1 es ${n1} y n2 es ${n2}`;
console.log(stringliteral);

const stringliteral2 = `este es un parrafo
con saltos 
de 
linea
`
console.log(stringliteral2);

const stringliteral3 = `
<div>
  <ul>
    <li>uno</li>
    <li>dos</li>
    <li>tres</li>
  </ul>
</div>
`
console.log(stringliteral3);

if (marcosMayorImc) {
  console.log('marcos tiene mayor IMC que Juan')
} else {
  console.log('marcos tiene menor IMC que Juan')
}

const number1 = parseInt("12");
const number3 = Number("12");
console.log(number1)

const number2 = parseInt("abc");
console.log(number2)
console.log(typeof number2);

const toString1 = 12 + '';
console.log(toString1);
console.log(typeof toString1);
console.log(typeof toString1 === 'string');

const toString2 = String(12);
console.log(toString2);
console.log(typeof toString2);
console.log(typeof toString2 === 'string');

Number.parseInt("13", 10);
String.toString(15);

// Truthy - Falsey
// Truthy: 12, 'dasd', true, {}, []
if (number1) {
  console.log('number1 es truthy')
}
// Falsey: '', undefined, null, 0, false
let variable1;
const obj = null;
if (variable1) {
  console.log('variable1 es truthy')
}

// == y ===
console.log(1 === 1);
console.log(1 === 2);
console.log(1 === '1');
console.log(1 == '1');
console.log(1 + '1');
console.log('1' + 1);
console.log(1 + 1 + '1');
console.log('1' + 1 + 1);
console.log(+'1' + 1 + 1);
console.log('10' - 5);
console.log(5 - '10');

let strinconc = '12345';
strinconc += '67890'; // stringconc = stringconc + '67890'
console.log(strinconc)

let count = 0;
console.log(++count);
console.log(count++);

console.log(true && false);
console.log(true && true);

console.log(true || false);
console.log(true || true)
console.log(false || false)

count = 2000
if (!count || (count < 10 && count > 5)) {
  console.log('count esta entre 5 y 10 o no esta definido');
} else if (count >= 10 && count < 100) {
  console.log('count es mayor o igual a 10 y menor que 100')
} else if (count >= 100 && count < 1000) {
  console.log('count es mayor o igual a 100 y menor que 1000')
} else {
  console.log('count es mayor o igual a 1000')
}

// challenge 3
//const puntajeDelfines = (96 + 108 + 89) / 3;
//const puntajeKoalas = (88 + 91 + 110) / 3;

// const puntajeDelfines = (97 + 112 + 101) / 3;
// const puntajeKoalas = (109 + 95 + 123) / 3;

const puntajeDelfines = (97 + 112 + 101) / 3;
const puntajeKoalas = (109 + 95 + 106) / 3;

if (puntajeDelfines >= 100 && puntajeDelfines > puntajeKoalas) {
  console.log('gana Delfines');
} else if (puntajeKoalas >= 100 && puntajeKoalas > puntajeDelfines) {
  console.log('gana Koalas');
} else if (puntajeDelfines >= 100 && puntajeDelfines === puntajeKoalas) {
  console.log('empate');
} else {
  console.log('nadie gana');
}

// switch
const edad = 19;
switch (edad) {
  case 18:
    console.log('tiene 18 años case 1');
    break;
  case 22:
    console.log('tiene 22 años case 2');
    break;
  case 50:
    console.log('tiene 50 años case 3');
    break;
  default:
    console.log(`tiene ${edad} años`);
}

let resultado;
if (edad >= 18) {
  if (edad <= 20) {
    resultado = 'menor de 20';
  } else {
    resultado = 'mayor de edad';
  }
} else {
  resultado = 'menor de edad';
}
console.log(resultado);

resultado = edad >= 18 ? 'mayor de edad' : 'menor de edad';
console.log(resultado);

// Challenge 3
const valorFactura = 275;
const propina = valorFactura >= 50 && valorFactura <= 300
  ? valorFactura * 0.15
  : valorFactura * 0.2;
console.log(`El valor de la factura es ${valorFactura}, la propina es ${propina} y el valor total es ${valorFactura + propina}`)