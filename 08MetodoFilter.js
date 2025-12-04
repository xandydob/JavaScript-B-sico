const funcionarios = [
    { nome: "João", departamento: "TI", salario: 5000 },
    { nome: "Maria", departamento: "RH", salario: 4500 },
    { nome: "Pedro", departamento: "TI", salario: 6000 },
    { nome: "Ana", departamento: "Vendas", salario: 4000 },
    { nome: "José", departamento: "TI", salario: 8500 },

]

const equipeTI = funcionarios.filter((func) => func.departamento === "TI")
    .map((func) => ({ ...func, tipo: func.salario > 5000 ? "pleno" : "junior" }));
console.log(equipeTI);

/*const novaEquipe = equipeTI.map((func) => ({...func,tipo:func.salario>5000 ? "pleno" : "junior"}));
console.log(novaEquipe);*/

//prática da apopstila

const funcionarios2 = [
    { nome: "João", departamento: "TI", salario: 5000 },
    { nome: "Maria", departamento: "RH", salario: 4500 },
    { nome: "Pedro", departamento: "TI", salario: 6000 },
    { nome: "Ana", departamento: "Vendas", salario: 4000 }
];

//Funcionário de TI
const equipeTI2 = funcionarios2.filter(func => func.departamento === "TI");

//Salários acima da mádia
const salarioMedio = funcionarios2.reduce((sum, func) => sum + func.salario, 0)
    / funcionarios2.length;

const salarioAcimaDaMedia = funcionarios2.filter(func => func.salario > salarioMedio);
console.log(salarioAcimaDaMedia);

//Multiplos critérios
const tiComSalarioAlto = funcionarios2.filter(func =>
    func.departamento === "TI" && func.salario > 5000);

console.log(tiComSalarioAlto);

//Pipeline de transformação comum em React
const resultado = funcionarios
    .filter(func => func.departamento === "TI")
    .map(func => ({ nome: func.nome, salario: func.salario }));
console.log(resultado);