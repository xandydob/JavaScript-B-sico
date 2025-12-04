//Exemplos práticos do operador ternário
const temperatura = 25;
const clima = temperatura >= 20 ? 'quente' : 'frio';
console.log(clima); //"quente"

//Validação de entrada
const email = "usuario@exemplo.com";
const emailvalido = email.includes("@")? "válido" : "inválido";
console.log(emailvalido);


const nota = 85;
const conceito = nota >= 90? "A" :
 nota >= 80? "B" :
 nota >=70? "C" :
 "D";

 console.log(conceito); //"B"

 //Uso comum em React para renderização condicional
 const mensagem = usuario.logado
 ? `Bem-Vindo, ${usuario.nome}!`
 : "Por favor, faça login";


