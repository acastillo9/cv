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