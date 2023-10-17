const { getTodosUsuarios, getUsuarioId,inserirNovoUser } = require('../servicos/livros.js')

// Buscar todos Usuários
function getUsuario(req, res) {
    try {
        const livros = getTodosUsuarios()
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
    // Buscar usuário pelo numero do id
} function getUsuarios(req, res) {
    try {
        const id = req.params.id
        const user = getUsuarioId(id)
        res.send(user)

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
} function postUsuarios(req,res){
    try {
        const novoUser = req.body
        inserirNovoUser(novoUser)
        res.send("Deu certo")
        req.status(201)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getUsuario,
    getUsuarios,
    postUsuarios
}