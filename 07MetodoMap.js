
//usando map
const numeros = [2, 3, 4, 5, 7]

const quadrados = numeros.map((num) => num * num);
console.log(quadrados);

const produtos = [
    { nome: "Notebook", preco: 2500 },
    { nome: "Mouse", preco: 50 },
    { nome: "Teclado", preco: 150 }
]

const precos = produtos.map((prod) => prod.preco);
console.log(precos);

//praticando exercicio da apostila

const produtos2 = [
    { nome: "Notebook", preco: 2500 },
    { nome: "Mouse", preco: 50 },
    { nome: "Teclado", preco: 150 },
];

// Extraindo apenas os nomes
const nomesProdutos2 = produtos2.map(produto => produto.nome);
console.log(nomesProdutos2); // ["Notebook", "Mouse", "Teclado"]

//Aplicando transformações complexas
const produtosComDesconto = produtos2.map(produtos2 => ({
    ...produto,
    precoPromocional: produto2.preco * 0.9,
    categoria: produto.preco > 100 ? "Premium" : "Básico"
}));

//Uso típico em React para renderização
const listaHTML = produtos.map ((produto, index) =>
    `<li key="${index}">${produto.nome} - R$ ${produto.preco}</li>`
)