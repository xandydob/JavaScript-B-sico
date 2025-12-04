//Utilização de cobinação de listas

const frutas = ["maçã", "laranja", "côco", "abacate"];
const vegetais = ["alface", "tomate", "cenoura"];

const alimentos =[...frutas,...vegetais];
console.log(alimentos);


//criando uma cópia superficial

const copiaFruta =[...frutas];
copiaFruta.push("uva", "morango", "kiwi");

console.log(copiaFruta);
console.log(frutas);

//Ulização passando parametros em função
const numeros = [10,15,20,45,1999,5];
console.log(Math.max(...numeros));
 