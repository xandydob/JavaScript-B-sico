//Compração: função tradicional vs arrow function
//Função traficional
function saudacao (nome) {
    return "Olá," + nome + "!";
}

//Arrow function equivalente
const saudacao = (nome) => "Olá, " + nome + "!";

//Multiplos parâmetros
const calculaArea = (largura, altura) => largura * altura;

//Função sem parâmetros
const obterDataAtual = () => new Date().toLocaleDateString();

//Para múltiplas linhas, use chaves e return
const processarPedido = (itens) =>{
    const total = itens.reduce ((sum,item) => sum + item.preco, 0);
    const desconto = total > 100 ? total * 0.1 : 0;
    return total-desconto;
};

//retorno de objeto (use parênteses para evitar confusão com bloco)
const criarUsuario = (nome, idade) => ({nome, idade, ativo: true});