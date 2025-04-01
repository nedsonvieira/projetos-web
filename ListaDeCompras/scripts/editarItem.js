function editarItem(nomeItem) {
    const novoNome = prompt("Editar item:", nomeItem.innerText);
    if (novoNome !== null && novoNome.trim() !== "") {
        nomeItem.innerText = novoNome;
    }
}

export default editarItem;