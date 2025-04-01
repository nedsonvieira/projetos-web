function gerarData() {

    const diaDaSemana = new Date().toLocaleDateString("pt-BR", {
        weekday: "long"
    });
    const data = new Date().toLocaleDateString("pt-BR");

    const dia = diaDaSemana.charAt(0).toUpperCase() + diaDaSemana.slice(1);

    const hora = new Date().toLocaleTimeString("pt-BR", {
        hour: "numeric",
        minute: "numeric"
    });

    const dataCompleta = `${dia} (${data}) às ${hora}`;

    return dataCompleta;
}

export default gerarData;