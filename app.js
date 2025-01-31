//Crie um array para armazenar os nomes
let amigos = [];
let mensagem = document.querySelector('p')

//Implementa uma função para agregar amigos
function adicionarAmigo() {
    const input = document.querySelector('input');
    let nomeAmigo = input.value.trim() // limpa espaços
    if (nomeAmigo !== '') {
        amigos.push(nomeAmigo)
        renderizarLista()
        mensagem.textContent = ''
    }
    else {
        mensagem.textContent = 'Por favor, insira um nome.';
    }
    input.value = '';

    console.log(amigos)
}

//Implementa uma função para atualizar a lista de amigos
function renderizarLista() {
    const lista = document.querySelector('#resultado')
    lista.innerHTML = ""

    for (let i = 0; i < amigos.length; i++) {
        let novoAmigo = document.createElement('li')
        novoAmigo.textContent = amigos[i];

        lista.appendChild(novoAmigo)
    }
}

//Implementa uma função para sortear os amigos
function sortearAmigo() {
    if (amigos.length == '') {
        mensagem.textContent = 'Digite o nome dos seus amigos';
    } else {
        let nomeSorteado = Math.floor(Math.random() * amigos.length)
        let amigoSorteado = amigos[nomeSorteado]
        document.querySelector('#resultado').textContent = `O amigo secreto sorteado é: ${amigoSorteado}`
    }
    console.log(amigos)
}

// ADICIONE MAIS CARACTERISTICAS AO JOGO E SE DIVIRTA





