import gerarData from "./gerarData.js";
import editarItem from "./editarItem.js";
import removerItem from "./removerItem.js";

const inputItem = document.getElementById("input-item");
let contador = 0;

export function adicionarItem() {

    if (inputItem.value === "") {
        alert("Por favor, insira um item!");
        return
    }

    const itemDaLista = document.createElement("li");

    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container");

    const containerItem = document.createElement("div");
    containerItem.classList.add("item-container");

    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox-" + contador++;

    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value;

    inputCheckbox.addEventListener("click", function () {
        if (inputCheckbox.checked) {
            nomeItem.style.textDecoration = "line-through";
        } else {
            nomeItem.style.textDecoration = "none"
        }
    });

    containerItem.appendChild(inputCheckbox);
    containerItem.appendChild(nomeItem);

    const botoesContainer = document.createElement("div");
    botoesContainer.classList.add("botoes-container");

    // Botão Editar (Imagem)
    const botaoEditar = document.createElement("img");
    botaoEditar.src = "./img/edit.svg";
    botaoEditar.alt = "Editar";
    botaoEditar.classList.add("item-lista-button");

    botaoEditar.addEventListener("click", () => editarItem(nomeItem));

    // Botão Excluir (Imagem)
    const botaoExcluir = document.createElement("img");
    botaoExcluir.src = "./img/delete.svg";
    botaoExcluir.alt = "Excluir";
    botaoExcluir.classList.add("item-lista-button");

    botaoExcluir.addEventListener("click", () => removerItem(itemDaLista));

    // Adicionando botões ao container
    botoesContainer.appendChild(botaoEditar);
    botoesContainer.appendChild(botaoExcluir);

    containerItemDaLista.appendChild(containerItem);
    containerItemDaLista.appendChild(botoesContainer);

    itemDaLista.appendChild(containerItemDaLista);

    const dataCompleta = gerarData();

    const itemData = document.createElement("p");
    itemData.innerText = dataCompleta;
    itemData.classList.add("texto-data");

    itemDaLista.appendChild(itemData);

    inputItem.value = "";

    return itemDaLista;
}