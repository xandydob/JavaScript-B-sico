//Exemplos de tipagem dinâmica
let dados = 42; //number
console.log(typeof dados); //mostra o tipo de dados na variável dados. //"number"

dados = "Hello World"; //agora é string
console.log(typeof dados); //"string"

dados = true; //agora é boolean
console.log(typeof dados); //"boolean"

dados = {nome: "Alexandre"}; //agora é object
console.log(typeof dados); //"object"

//Tipos primitivos
let numero = 123; //number
let texto = "React"; //string
let ativo = true; //boolean
let indefinido; //undefined
let vazio = null; //object (por padrão)
let grande = 123n; //bigint