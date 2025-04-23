let livros = [];
const endpointApi = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscarLivrosApi();

async function getBuscarLivrosApi() {
    const response = await fetch(endpointApi);
    livros = await response.json();

    let livrosComDesconto = aplicarDesconto(livros);
    exibirLivros(livrosComDesconto);
}