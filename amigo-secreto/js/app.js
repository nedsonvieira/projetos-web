let amigos = [];

function adicionar() {
    const amigo = document.getElementById('nome-amigo');
    const lista = document.getElementById('lista-amigos');
    const nomeAmigo = amigo.value.trim().toUpperCase();

    if (nomeAmigo === '') {
        alert('Digite um nome válido!');
        return;
    }

    if (amigos.includes(nomeAmigo)) {
        alert('Este nome já foi adicionado!');
        return;
    }

    amigos.push(nomeAmigo);

    lista.textContent = amigos.join(', ');
    amigo.value = '';

    atualizarLista();
    atualizarSorteio();
}

function sortear() {
    if (amigos.length < 4) {
        alert('É necessário pelo menos 4 amigos para realizar o sorteio!');
        return;
    }

    embaralha(amigos);

    const sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';

    amigos.forEach((amigo, i) => {
        const proxAmigo = amigos[(i + 1) % amigos.length];
        sorteio.innerHTML += `${amigo} --> ${proxAmigo}<br>`;
    });
}

function embaralha(lista) {
    for (let i = lista.length - 1; i > 0; i--) {
        const indiceAleatorio = Math.floor(Math.random() * (i + 1));
        [lista[i], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[i]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}

function excluirAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}

function atualizarSorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}

function atualizarLista() {
    let lista = document.getElementById('lista-amigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        let paragrafo = document.createElement('p');
        paragrafo.textContent = amigos[i];

        paragrafo.addEventListener('click', function () {
            excluirAmigo(i);
        });

        lista.appendChild(paragrafo);
    }
}