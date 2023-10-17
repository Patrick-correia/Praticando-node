const fs = require("fs")

function getTodosUsuarios() {
    return JSON.parse(fs.readFileSync("livros.json"))
}

function getUsuarioId(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"))

    const livroFiltrado = livros.filter(livro => livro.id == id)[0]
    return livroFiltrado
}

function inserirNovoUser(userNovo) {
    const User = JSON.parse(fs.readFileSync("livros.json"))
    const novoUsers = [...User, userNovo]

    fs.writeFileSync("livros.json", JSON.stringify(novoUsers))
}
module.exports = {
    getTodosUsuarios,
    getUsuarioId,
    inserirNovoUser
}
