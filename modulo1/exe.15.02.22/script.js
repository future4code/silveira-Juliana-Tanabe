1. a. false
b. false
c. true
d. boolean

2. Será exibido no console a concatenação dos números pois eles são transformandos em string.

3. Use o método parseInt() para transformar em números inteiros



1. 
const age = prompt('Qual a sua idade?');
const bfAge = prompt('Qual a idade do seu melhor amigo(a)');
parseInt(age, bfAge);

const comparador = age > bfAge;

console.log('Sua idade é maior do que a do seu melhor amigo?', comparador);

const diferenca = age - bfAge;
console.log("Diferença entre as idades:", diferenca);

2.
const nPar = prompt('Insira um número par');
let resto = nPar % 2
console.log(resto)

c. Sempre resulta em 0

d. o console imprime 1

3.

const idade = prompt('Digite sua idade')
parseInt(idadeAnos);

console.log("a. Idade em meses", idade*12)
console.log("b. Idade em dias", idade*365)
console.log("c. Idade em horas", idade*365*24)

4.

const n1 = Number(prompt('Digite um número'));
const n2 = Number(prompt('Digite outro número'));

console.log("O primeiro numero é maior que segundo?", num1 > num2);
console.log("O primeiro numero é igual ao segundo?", num1 === num2);
console.log("O primeiro numero é divisível pelo segundo?", num1 % num2 === 0);
console.log("O segundo numero é divisível pelo primeiro?", num2 % num1 === 0);