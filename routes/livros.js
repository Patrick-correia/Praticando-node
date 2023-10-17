// routas que a api vai receber

const {Router} = require('express')
const {getUsuario,getUsuarios,postUsuarios} = require("../controllers/livros.js")

const router = Router()

// caminhos das rotas 
router.get('/',getUsuario)
router.get('/:id',getUsuarios)
router.post('/',postUsuarios)
router.patch('/')
router.delete('/')

module.exports = router