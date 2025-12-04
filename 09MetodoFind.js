const funcionarios = [
    { nome: "João", departamento: "TI", salario: 5000 },
    { nome: "Maria", departamento: "RH", salario: 4500 },
    { nome: "Pedro", departamento: "TI", salario: 6000 },
    { nome: "Ana", departamento: "Vendas", salario: 4000 },
    { nome: "José", departamento: "TI", salario: 8500 }
]

const funcionario = funcionarios.find((func) => func.nome === "Pedro");
console.log(funcionario);

const funcionarioTI = funcionarios.find((func) => func.departamento === "TI");
console.log(funcionarioTI);

const indiceFuncionarioRH = funcionarios.findIndex((func) => func.departamento === "RH");
console.log(indiceFuncionarioRH);

//Exercício da apostila
const biblioteca = [
    {id: 1, titulo: "1984", autor: "George Orwell", ano: 1949},
    {id: 2, titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1899},
    {id: 3, titulo: "O Cortiço", autor: "Aluísio Azevedo", ano: 1890},
]


//Encontrar livro por ID
const livro = biblioteca.find(livro => livro.id === 2);
console.log(livro); // {id: 2, titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1899}

//Primeiro livro do século XX
const livroSeculoXX = biblioteca.find(livro => livro.ano >= 1900);
console.log(livroSeculoXX);

//Verificar se existe (padrão comum)
const existeAutor = biblioteca.find(livro => livro.autor === "Clarice Lispector");
console.log( existeAutor? "Encontrado" : "Nao encontrado");

//Combinando com findIndex para localização completa
const indiceOrwell = biblioteca.findIndex(livro => livro.autor === "George Orwell");
const livroOrwell = biblioteca.find(livro => livro.autor === "George Orwell");
console.log(indiceOrwell);
console.log(livroOrwell);