// - **Exercícios de interpretação de código**
    
//     Tente responder os exercícios dessa seção sem executar o código. Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 
    
//     1. Analise o programa abaixo e diga o que será impresso no console, **SEM EXECUTAR o programa.**
        
//         ```jsx
//         let a = 10
//         let b = 10
        
//         console.log(b)
        
//         b = 5
//         console.log(a, b)
//         ```

        res = (10,5)
        
//     2. Analise o programa abaixo e diga o que será impresso no console, **SEM EXECUTAR o programa.**
        
//         ```jsx
//         let a = 10
//         let b = 20
//         c = a
//         b = c
//         a = b
        
//         console.log(a, b, c)
//         ```
        
          res = (10, 10 ,10)

//     3. Analise o programa abaixo, entenda o que ele faz e **sugira melhores nomes para as variáveis**. Lembre-se que devemos escolher nomes significativos, usar o padrão **camelCase**. Alem disso, os nomes não podem começar com números ou caracteres especiais.
        
//         ```jsx
//         let p = prompt("Quantas horas você trabalha por dia?")
//         let t = prompt("Quanto você recebe por dia?")
//         alert(`Voce recebe ${t/p} por hora`)
//         ```

          res = horasTrabalhoDia, salarioDia, salarioHora 

//           1. Construa um programa, seguindo os seguintes passos:
    
//     a) Declare uma variável para armazenar um nome, sem atribuir um valor.
    
//     b) Declare uma variável para armazenar uma idade, sem atribuir um valor.
    
//     c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando `typeof`.
    
//     d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.
    
//     e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.
    
//     - 💡  Dica

        let nome = null;
        let anos = null;
        typeof nome;
        typeof anos;
        //d) O tipo é object, é um recipiente e serve pra armazenar alguma coisa


        const anos = prompt("Qual a sua idade?");
        const nome = prompt("Como você se chama?");

        console.log('Olá',nome ,'você tem', anos, 'anos');
        typeof nome;
        typeof anos;
        // f) O tipo é string depois de preenchida
//         <aside>
//         ☝ Se você receber um erro de código nessa etapa, reflita sobre o tipo de declaração que utilizou.
        
//         </aside>
        
    
//     f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.
    
//     g) Para finalizar, imprima na tela a mensagem: "Olá `nome`,  você tem `idade` anos". Onde `nome` e `idade` são os valores que o usuário inseriu
    
//     - 💡  Dica
        
//         <aside>
//         ☝ Dica: para imprimir mais de um valor na mesma linha, você pode usar essa sintaxe:
//         `console.log(valor1, valor2)`
        
//         </aside>
        
    
// 2. Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável. Por exemplo: "Você está usando uma roupa azul hoje?". Depois, siga os passos:

        let eAzul= null;
        let toBem = null;
        let temFome = null;

        const eAzul = prompt('Você está usando uma roupa azul hoje?');
        const toBem = prompt('Tudo bem com você?');
        const temFome = prompt('Você está com fome?');

        

        console.log('Você está usando uma roupa azul hoje?', eAzul, 'Tudo bem com você?', toBem, 'Você está com fome?', temFome );

    
//     a) Crie três novas variáveis, contendo as respostas
    
//     b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas. Por exemplo:
    
//     ```
//     Você está usando uma roupa azul hoje? - SIM
//     ```
    
// 3. Suponha que temos duas variáveis `a` e `b`, cada uma com um valor inicial
    
//     ```jsx
//     let a = 10
//     let b = 25
//     ```
    
//     Agora, queremos trocar os valores delas, de forma que `a` passe a ter o valor de `b` e `b` passe a ter o valor de `a`. 
    
//     Ou seja, no caso desse exemplo acima, `a` passaria a ser 25 e `b` passaria a ser 10.
    
//     ```jsx
//     let a = 10
//     let b = 25
    
//     // Aqui faremos uma lógica para trocar os valores
    
//     // Depois de trocados, teremos o seguinte resultado:
//     console.log("O novo valor de a é", a) // O novo valor de a é 25
//     console.log("O novo valor de b é", b) // O novo valor de b é 10
//     ```
    
//     Crie a lógica que deve ser inserida no código para que os valores de a e b sejam trocados, independente de qual valor essas variáveis assumam inicialmente (ou seja: não basta dizer que `a = 25` e `b = 10` porque se os valores iniciais mudarem, a lógica do seu programa teria que mudar também). 

                let a = 10;
                let b = 25;
                let c = 0;
                let d = 0;

                let c = a;
                let d = b;
                let a = d;
                let b = c;

    
//     - 💡  Dica 1
        
//         <aside>
//         ⭐ Podemos começar fazendo com que o valor de a seja igual ao que está no b, então ficaria assim: `a = b`
        
//         Nesse ponto, se déssemos um `console.log` no `a` e no `b`, teríamos que `a = 25` e `b = 25` 
        
//         Mas desse jeito, a gente perdeu o valor anterior que estava no `a`! E agora, como você poderia guardar esse valor para atribuir à variável `b`? 🤔
        
//         </aside>
        
//     - 💡  Dica 2
        
//         <aside>
//         ⭐ Vamos supor que você tem dois copos: um copo A que tem suco de laranja e um copo B que tem coca-cola. Como você faria para trocar o conteúdo dos dois?
        
//         </aside>
        
//         ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9c491202-303a-45c8-a5b6-bad5925182a9/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9c491202-303a-45c8-a5b6-bad5925182a9/Untitled.png)
        
//     - 💡  Dica 3
        
//         <aside>
//         ⭐ Para trocar os líquidos de copo sem misturá-los, você pode pegar um copo vazio para te auxiliar!
        
//         </aside>
        
//         ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e5012092-6c61-4607-9089-cb40c177c6e1/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e5012092-6c61-4607-9089-cb40c177c6e1/Untitled.png)
        
//     - 💡  Dica 4
        
//         ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/53b2d1f7-6b62-4d1d-90b6-2821b7270df8/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/53b2d1f7-6b62-4d1d-90b6-2821b7270df8/Untitled.png)
        
//         ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/32fc3eef-fcb6-4be2-9322-801e93068883/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/32fc3eef-fcb6-4be2-9322-801e93068883/Untitled.png)
        
//         ![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4fb50c73-18b5-4237-bce7-9785f20a93e8/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4fb50c73-18b5-4237-bce7-9785f20a93e8/Untitled.png)