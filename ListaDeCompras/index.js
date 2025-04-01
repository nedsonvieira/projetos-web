import { adicionarItem } from "./scripts/adicionarItemLista.js";
import verificarListaVazia from "./scripts/verificarListaVazia.js";

const listaDeCompras = document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById("adicionar-item");

botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();

    const itemDaLista = adicionarItem();
    listaDeCompras.appendChild(itemDaLista);

    verificarListaVazia(listaDeCompras);
});

verificarListaVazia(listaDeCompras);