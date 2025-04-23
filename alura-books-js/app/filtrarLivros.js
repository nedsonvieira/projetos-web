const botoes = document.querySelectorAll('.btn');

botoes.forEach(btn => btn.addEventListener('click',
    filtrarLivros
));

function filtrarLivros() {
    const idBotao = document.getElementById(this.id);
    const categoria = idBotao.value;
    let livrosFiltrados = categoria == 'disponivel'
        ? filtraPorDisponibilidade()
        : filtraPorCategoria(categoria);

    exibirLivros(livrosFiltrados);

    if (categoria === 'disponivel') {
        const valorTotal = calcularValorTotalLivrosDisponiveis(livrosFiltrados);
        exibirPromocao(valorTotal);
    }
}

function filtraPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria === categoria);
}

function filtraPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibirPromocao(valorTotal) {
    sectionPromocao.innerHTML = `
        <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
        </div>
    `;
}