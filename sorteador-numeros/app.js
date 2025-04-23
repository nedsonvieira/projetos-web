let botaoR = document.getElementById('btn-reiniciar');
let botaoS = document.getElementById('btn-sortear');

function sortear() {
    if (botaoS.classList.contains('container__botao')) {
        let quantidade = parseInt(document.getElementById('quantidade').value);
        let de = parseInt(document.getElementById('de').value);
        let ate = parseInt(document.getElementById('ate').value);

        const inputs = document.getElementsByClassName('container__input');

        for (let input of inputs) {
            if (isNaN(input.value) || input.value.trim() === '') {
                alert('Informe todos os campos para sortear!');
                return;
            }
        }

        if (de >= ate) {
            alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
            return;
        }

        if (quantidade > (ate - de + 1)) {
            alert('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
            return;
        }

        let sorteados = [];
        let numero;

        for (let i = 0; i < quantidade; i++) {
            numero = obterNumeroAleatorio(de, ate);

            while (sorteados.includes(numero)) {
                numero = obterNumeroAleatorio(de, ate);
            }

            sorteados.push(numero);
        }

        let resultado = document.getElementById('resultado')
        resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`
        alterarStatusBotao();
    }
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    if (botaoR.classList.contains('container__botao-desabilitado')) {
        botaoR.classList.remove('container__botao-desabilitado');
        botaoR.classList.add('container__botao');
        botaoS.classList.remove('container__botao');
        botaoS.classList.add('container__botao-desabilitado');
    } else {
        botaoR.classList.remove('container__botao');
        botaoR.classList.add('container__botao-desabilitado');
        botaoS.classList.remove('container__botao-desabilitado');
        botaoS.classList.add('container__botao');
    }
}

function reiniciar() {
    if (botaoR.classList.contains('container__botao')) {
        document.getElementById('quantidade').value = '';
        document.getElementById('de').value = '';
        document.getElementById('ate').value = '';
        document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
        alterarStatusBotao();
    }
}