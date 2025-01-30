//Crie um array para armazenar os nomes
let listaAmigos = [];

// Implementa uma função para agregar amigos
function adicionarAmigos(){
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.ariaValueMax.trim();

    //verificar se o campo não está vazio
    if(nome == '') {
        alert('Por favor, insira um nome.');
        return; // para parar a execução da função
    }

    //Verificar se o nome não é igual
    if(listaAmigos.includes(nomeAmigo)){
        alert(`O nome ${nomeAmigo} já está na lista`);
        return; // para parar a função
    }

    //Adicionando os nomes a um array de amigos
    listaAmigos.push(nomeAmigo);

    //limpando campo de entrada
    inputAmigo.ariaValu = '';

    //Atualizar a lista de amigos
    atualizarLista();
    

}

//Implementa uma função para atualizar a lista de amigos
function atualizarLista(){
    const listaAmigos = document.getElementById('listaAmigos');

    //Limpar o conteudo atual da lsta
    listaAmigos.innerHTML = ""; //Limpar conteúdos dentro da lista

    //Loop for para a array
    for(let i = 0; i <amigos.length; i++){
        const li = document.createrElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

//Implementar uma função para sortear os amigos