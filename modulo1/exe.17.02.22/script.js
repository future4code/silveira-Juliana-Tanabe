1. a) 10 e 50
   b) Não vai aparecer nada no console
   

2. a) A função transforma todas a letras em minúsculas e verifica se a palavra cenoura existe ali

   b) true
      true
      true

1. 
  a) function infos() {
    console.log('Eu sou Juliana, tenho 22 anos, moro em Mauá e sou estudante');
  }
  infos()

  b) 
  
  const infosFrase = (nome, idade, cidade, profissao) => {
    return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade}, e sou ${profissao}.`
  }
  infosFrase('Juliana', 22, 'Mauá', 'programadora');


2.

a.
const soma = (n1, n2) => {
  return n1 + n2;
}

soma(8,7)

b.

const eMaior = (x, y) => {
  return x >= y;
}

eMaior(3, 11)

c.

const par = (x) => {
  return x % 2 === 0;
}

d.

const sizeMsg = (mensagem) => {
  return `${mensagem.length()}, ${mensagem.toUpperCase()}`
}
console.log(sizeMsg)



3.

const n1 = Number(prompt('Insira um número'))
const n2 = Number(prompt('Insira outro número'))

const soma = (n1, n2) => {
  return n1 + n2;
}
const result1 = soma(n1, n2);

const mult = (n1, n2) => {
  return n1 * n2;
}
const result2 = mult(n1, n2);

const dif = (n1, n2) => {
  return n1 - n2;
}
const result3 = dif(n1, n2);

const div = (n1, n2) => {
  return n1 / n2;
}
const result4 = div(n1, n2);

console.log(`Números inseridos: ${n1} e ${n2}.`);
console.log(`Soma: ${result1}`);
console.log(`Multiplicação: ${result2}`);
console.log(`Subtração: ${result3}`);
console.log(`Divisão: ${result4}`);