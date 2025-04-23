function comprar() {
    const tipo = document.getElementById('tipo-ingresso').value;
    const qtd = parseInt(document.getElementById('qtd').value);

    if (isNaN(qtd) || qtd <= 0) {
        alert('Quantidade inválida! Por favor, insira um número positivo.');
        return;
    }

    if (tipo === 'pista' || tipo === 'superior' || tipo === 'inferior') {
        comprarIngresso(tipo, qtd);
    } else {
        alert('Tipo de ingresso inválido!');
    }
}

function comprarIngresso(tipo, qtd) {
    const estoqueId = `qtd-${tipo}`;
    const estoque = parseInt(document.getElementById(estoqueId).textContent);

    if (qtd > estoque) {
        alert(`Quantidade indisponível para tipo ${tipo}`);
    } else {
        document.getElementById(estoqueId).textContent = estoque - qtd;
        alert('Compra realizada com sucesso!');
    }
}