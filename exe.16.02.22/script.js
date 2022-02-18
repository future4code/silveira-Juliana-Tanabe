1. 
  a) undefined
  b) b. null
  c) c. 11
  d) d. 1
  e) error array não definido
  f) error array não definido

2. "SUBI NUM ÔNIBUS EM MIRROCOS" 27


1. 
  const userName = prompt('Qual o seu nome?');
  const userEmail = prompt('Qual seu e-mail?');

  console.log(`O email ${userEmail} foi cadastrado com su;cesso. Seja bem vindo(a), ${userName}`)

2. 
  
  let favoriteFoods = ['frutas', 'peixe', 'chocolate', 'sorvete', 'pães'];
  console.log(favoriteFoods);
  console.log('Essas são minhas comidas favoritas:');
  console.log(array[0]);
  console.log(array[1]);
  console.log(array[2]);
  console.log(array[3]);
  console.log(array[4]);

  const userFavorite = prompt('Qual a sua comida favorita?')

  favoriteFoods[1] = userFavorite;
  console.log(favoriteFoods)

3.
  let listaDeTarefas = [];
  
  const task1 = prompt('Vamos listar 3 tarefas. Qual sua primeira tarefa?');
  listaDeTarefas.push(task1);
  const task2 = prompt('Qual sua segunda tarefa?');
  listaDeTarefas.push(task2);
  const task3 = prompt('Qual sua terceira tarefa?');
  listaDeTarefas.push(task3);
  console.log(listaDeTarefas);

  const concluido = prompt('Qual tarefa você terminou? 0, 1 ou 2?');
  parseInt(concluido)
  listaDeTarefas.splice(concluido,1);
  console.log(listaDeTarefas);


// Desafios
  const frase = ('Faça uma lista, escreva tudo aqui apenas separando por vírgulas');
  let result = frase.split(',');
  console.log(result);



    let frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];
    const ache = frutas.find('Abacaxi');
    console.log(ache);