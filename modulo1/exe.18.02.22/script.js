1. 

const altura = prompt('Digite a altura do retângulo')
const largura = prompt('Digite a largura do retângulo')
parseFloat(altura, largura);
const areaRetangulo = (altura, largura) => {
  result = (altura * largura);
  console.log(result);
};

areaRetangulo(altura, largura)

2. 

const anoAtual = prompt('Digite o ano atual');
const anoNasc = prompt('Digite o ano em que você nasceu');
parseInt(anoAtual, anoNasc)

const idade = (anoAtual, anoNasc) => {
  result = (anoAtual - anoNasc);
  console.log(`Você tem ${idade} anos`);
}

idade(anoAtual, anoNasc)

3.

const peso = prompt('Digite seu peso em Kg')
const altura = prompt('Digite sua altura em metros')
parseFloat(peso, altura)

const imc = (peso, altura) => {
  return peso / (altura * altura);
}

imc(peso, altura)

4.
const nome = prompt('Digite seu nome')
const idade = prompt('Digite sua idade')
const email = prompt('Digite seu e-mail')

const info = (nome, idade, email) => {
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

info(nome, idade, email)


5.

let colors = [];
const userColors = prompt('Qual sua primeira cor favorita?');
colors.push(userColors);
const userColors2 = prompt('Qual sua segunda cor favorita?');
colors.push(userColors2);
const userColors3 = prompt('Qual sua terceira cor favorita?');
colors.push(userColors3);


const favoriteColors = (userColors, userColors2, userColors3) => {
  console.log(colors)
}

favoriteColors(userColors, userColors2, userColors3)

6.

const maiuscula = prompt('Digite o que quiser passar para maiúscula');

const transform = (maiuscula) => {
  console.log(maiuscula.toUpperCase());
}

transform(maiuscula)

7. 

const custo = prompt('Quanto custou?');
const valIng = prompt('Quanto vale cada ingresso');
parseFloat(custo, valIng);

const valorNec = (custo, valIng) => {
  return custo / valIng
}

valorNec(custo, valIng);

8.

const string1 = prompt('Escreva a sua string');
const string2 = prompt('Escreva outra string');

const conferir = (string1, string2) => {
  size1 = string1.length;
  size2 = string2.length;

  if (size1 === size2){
    return true;
  }
  
}

conferir(string1, string2)

9.

let lista = [];
const item1 = prompt('Faça uma lista, qual seu primeiro item?')
lista.push(item1);
const item2 = prompt('Qual seu segundo item?');
lista.push(item2);
const item3 = prompt('Qual seu terceiro item?');
lista.push(item3);


const firstItem = (lista) => {
  return lista[0];
}

firstItem(lista);

10.

let lista = [];
const item1 = prompt('Faça uma lista, qual seu primeiro item?')
lista.push(item1);
const item2 = prompt('Qual seu segundo item?');
lista.push(item2);
const item3 = prompt('Qual seu terceiro item?');
lista.push(item3);


const firstItem = (lista) => {
  return lista[2];
}

11. 

let lista = [];
let item1 = prompt('Faça uma lista, qual seu primeiro item?');
lista.push(item1);
let item2 = prompt('Qual seu segundo item?');
lista.push(item2);
let item3 = prompt('Qual seu terceiro item?');
lista.push(item3);

let item = item1
let item1 = item3
let item3 = item1
const firstItem = (lista) => {
  return lista;
}


12.

const string1 = prompt('Vamos comparar, escreva uma palavra');
const string2 = prompt('escreva outra palavra')
let lower1 = string1.toLocaleLowerCase();
let lower2 = string2.toLocaleLowerCase();

const compare = (lower1, lower2) => {
  if (lower1 === lower2) {
    return true
  }
  else {
    return false
  }
}