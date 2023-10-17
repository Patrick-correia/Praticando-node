// fs ferramenta para manipular arquivos javascript  capacidade de ler, e inserir arquivos
const fs = require('fs')

// função/ propriedade para ler arquivos fs.readFileSync()
// transforma texto em json = json.parse() = ler um arquivo json e não retorna

const dadosAtuais = JSON.parse(fs.readFileSync("livros.json"))
const novoDado = {id:6, nome:"Fabricio", email:"Fabricioromeu@gmail", senha:"Genérica"}



// funçao para inserir/escrever dados = fs.writeFileSync()
// transforma json em texto = JSON.stringify() 
fs.writeFileSync("livros.json",JSON.stringify([...dadosAtuais,novoDado]))
console.log(JSON.parse(fs.readFileSync("livros.json")))

