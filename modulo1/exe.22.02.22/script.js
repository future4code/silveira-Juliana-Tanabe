1.

a. Ele testa se o número é par 
b. Para números pares onde o resto é 0
c. Para números ímpares onde  resto não é 0

2.

a. O código informa o preço da fruta

b. O preço da fruta maçã é R$2,25

c. O preço será o primeiro que tiver break no caso, 5

3.

a. está declarando uma variavel 
b. Ambas dão erro
c. Sim pois mensagem foi declarada dentro da função e ela não existe fora dela

1. 

const idade = Number(prompt('Qual a sua idade?'));
if (idade < 18) {
  console.log('Voce não pode dirigir');
} else {
  console.log('Você pode dirigit');
}

2.

const hora = prompt('Em qual período voce estuda? Digite M para Matutino, V para Vespertino e N para Noturno');

if (hora == 'M') {
  console.log('bom dia');
} else if (hora == 'V') {
  console.log('boa tarde');
} else {
  console.log('boa noite';)
}

3.

if (hora == 'M') {
  console.log('bom dia');
} else if (hora == 'V') {
  console.log('boa tarde');
} else {
  console.log('boa noite';)
}

4.

const genero = prompt('o filme é de fantasia? responda S ou N');
const preco = Number(prompt('qual o preço do filme?'))
if (genero === 'S' && preco < 15) {
  console.log('bom filme')
} else { 'escolha outro filme'}