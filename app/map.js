function aplicarDescontoDoLivro(livros){
    const desconto = 0.4
    livrosComDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)}
    })
    return livrosComDesconto
}