const numeros = [10, 20, 50, 80];

const [primeiro, , terceiro] = numeros;
console.log(primeiro, terceiro);

const funcionario = { nome: "Eduardo", profissao: "Professor" }

const { profissao } = funcionario;
console.log(profissao);

//Exercício prático da apostila
//Destructuring de arrays
const cores = ["vermelho", "verde", "azul", "amarelo"];

//Extração Básica
const [primeira, segunda, terceira] = cores;
console.log(primeira);//"vermelho"

//Pulando Elementos
const [primaria, , terciaria] = cores;
console.log(terciaria); //"azul"

//Rest operator
const [principal, ...restantes] = cores;
console.log(restantes); //["verde", "azul", "amarelo"]

//Valores padrão
const [a, b, c, d, e = "roxo"] = cores;

console.log(a); //vermelho
console.log(b); //verde
console.log(c); //azul
console.log(d); //amarelo
console.log(e); //roxo

//Destructuring de objetos
const pessoa = {
    nome: "Alexandre Milton Alves",
    idade: 40,
    profissao2: "Programador",
    endereco: {
        cidade: "Governador Celso Ramos",
        estado: "SC"
    }
};

//Extração simples
const { nome, idade, profissao2 } = pessoa;
console.log(nome); //Alexandre Milton Alves
console.log(idade); //40
console.log(profissao2); //Programador


//Renomeando variáveis
const { nome: nomeCompleto, idade: anos } = pessoa;
console.log(nomeCompleto); //Alexandre Milton Alves
console.log(anos); //40

//Valores padrão
const { nome2, telefone = "Não informado" } = pessoa;
console.log(telefone); //Não informado

//Destructuring aninhado
const { endereco: { cidade, estado } } = pessoa;
console.log(cidade); //Governador Celso Ramos
console.log(estado); //SC

//Em parâmetros de função
const apresentarPessoa = ({ nome, idade, profissao2 }) => {
    return `${nome}, ${idade} anos, trabalha como ${profissao2}`;
};

console.log(apresentarPessoa(pessoa));

//Troca de variáveis elegante

let a1 = 10, b1 = 20;
[a1, b1] = [b1, a1];
console.log(a1, b1);  //20,10