let livros = []
const endPointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json' 
getBuscarLivrosAPI();


async function getBuscarLivrosAPI(){
    const res = await fetch(endPointDaAPI);
    livros = await res.json();
    let livrosComDesconto = aplicarDescontoDoLivro(livros)
    exibirOsLivrosNaTela(livrosComDesconto)
}

