1. 

Matheus Nachtergaele
Virginia Cavendish
{ canal: "Globo", horario: "14h" }

2.

a.
  nome: "Juca", 
	idade: 3, 
	raca: "SRD"

  nome: "Juba", 
	idade: 3, 
	raca: "SRD"

  nome: "Jubo", 
	idade: 3, 
	raca: "SRD"

b. Os  ... antes do objeto/array copia o objeto ou o array


3.

a. false, undefined

b. Acessou o valor do objeto backender e imprimiu false
Não achou o valor altura que não foi definido e imprimiu undefined

1. 

a.
const info = {
  nome: 'Juliana',
  apelidos: ['Ju', 'Juju', 'Jubs']
}

const mensg = (info) => {
  console.log(`Meu nome é ${info.nome} mas pode me chamar de ${info.apelidos}`);
}

b. 
const info2 = {...nome, apelidos: ['Ju', 'Juju', 'Jubs']} 

2.

const obj1 = {
  nome: 'João',
  idade: 35,
  profissao: 'arquiteto'
}


const obj2 = {
  nome: 'Miriam',
  idade: 27,
  profissao: 'pintora'
}

const info = (pessoa) => {
  return [
    pessoa.nome,
    pessoa.nome.length,
    pessoa.idad,
    pessoa.profissao
    pessoa.profissao.length
  ];
}

3.

const carrinho = [];

const uva = {
  nome: "uva",
  disponibilidade: true
};

const pera = {
  nome: "pera",
  disponibilidade: true
};

const abacaxi = {
  nome: "abacaxi",
  disponibilidade: true
};

const comprar = (fruta) => {
  carrinho.push(fruta);
}

comprar(uva);
comprar(pera);
comprar(abacaxi);

console.log(carrinho);