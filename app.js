const express = require('express')
const rotaUser = require('./routes/livros.js')
const app = express()
// Permissão para a api consegui ler arquivos Json
app.use(express.json())

const port = 5010

app.use("/user",rotaUser)


app.listen(port,() => {
    console.log(`Servidor rodando na porta ${port}`)
})

