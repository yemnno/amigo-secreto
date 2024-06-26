let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo').value;
    if (amigo == '') {
        alert('Informe o nome de seu amigo!');
        return;
    }
    let nomeEmMaiusculo = amigo.toUpperCase();

    if (amigos.includes(nomeEmMaiusculo)) {
        alert('Nome já adicionado!');
        return;
    }
    amigos.push(nomeEmMaiusculo);

    let listaAmigos = document.getElementById('lista-amigos');

    if (listaAmigos.textContent == '') {
        listaAmigos.textContent = amigo;
    } else {
        listaAmigos.textContent = listaAmigos.textContent + ', ' + amigo;
    }
    
    document.getElementById('nome-amigo').value = '';

}

function sortear() {
    if (amigos.length < 4) {
        alert('O sorteio deve incluir ao menos 4 participantes.');
        return;
    }

    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');

    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
        }
    }
}

function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];

    let limparSorteio = document.getElementById('lista-sorteio');
    limparSorteio.textContent = '';

    let limparListaAmigos = document.getElementById('lista-amigos');
    limparListaAmigos.textContent = '';

}