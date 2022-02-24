1. O código imprime no console a contagem de 1 a 5

2.
a. Serão impressos todos os números abaixo de 18

b.  
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
          let indice = lista.indexOf(numero)
          console.log(`O indice do número ${numero} é ${indice}`)
	}
}


3.
*
**
***
****


1. 

let pets = []
const nPet = Number(prompt('Digite quantos pets você tem'))
const meusPets = (numero) => {
  for (let i = 0; i < numero; i++) {
  pets.push(prompt('Digite o nome dos seus pets um por um'));
}
} 
if (nPet === 0){
  console.log('Que pena! Você pode adotar um pet!');
} else {
  meusPets(nPet);
  console.log(pets);
}

2.

const array = [1,2,3,4,5,6,7,8];


  for (let numero of array){
    console.log(numero)
  }

  for (let numero of array){
    console.log(numero * 10);
  }


const pares = [];
  for (let numero of array){
    if(numero % 2 === 0) {
        pares.push(numero);
    }
  }
  console.log(pares)

  let maior = 0;
  const compareMaior = (arrayOrig) => {
    for(let num of arrayOrig){
      if (num > maior) {
         maior = num;
      }
    }
  }

  let menor = maior;
  const compareMenor = (arrayOrig) => {
    for(let num of arrayOrig){
      if (num < menor) {
         menor = num;
      }
    }
  }

  console.log(`O maior número é ${maior} e o menor é ${menor}`)