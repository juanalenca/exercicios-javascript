//Criando a class através de uma function:
//this.(propriedade or método)

function Pessoa(paramNome, paramIdade){

    this.nome = paramNome,
    this.idade = paramIdade,

    //métodos de obtenção e de atribuição
    this.getNome = function (){
        return this.nome
    },

    this.getIdade = function (){
        return this.idade
    },

    //setandano um novo valor
    this.setNome = function (){
        this.nome = nome
    },

    this.setIdade = function (){
        this.tipo = idade
    },

    //criando um método para impressão de propriedades
    this.info = function (){
        console.log(`Nome: ${this.nome}`)
        console.log(`Idade: ${this.idade}`)
        console.log("\n")
    }

}



//array que contém todas as pessoas
let pessoas = []


const btn_add = document.querySelector("#btn_add")
//elemento que vai conter as pessoas adicionadas
const res = document.querySelector(".res")


const addPessoa = () => {

    //limpando o elemento antes de adicionar uma nova pessoa
    res.innerHTML = ""
    
    /*
    Para cada pessoa no array pessoas, eu vou percorre-las 
    e criar um elemento div onde neste elemento div eu vou atribuir 
    uma class chamada "pessoa". Depois, essas divs criadas vão recebe 
    um texto dos nomes e idades digitados pelo user. E, por fim, 
    adicionamos cada uma dessas divs como filhas no campo da div "res".
    */
    pessoas.map((p) => {
        
        const div = document.createElement("div")
        div.setAttribute("class", "pessoa")
        div.innerHTML = `Nome: ${p.getNome()}</br>Idade: ${p.getIdade()}`
        res.appendChild(div)

    })

}


btn_add.addEventListener("click", (evento) => {

    //pegando o que foi digitado pelo usuário
    const nome = document.querySelector("#f_nome")
    const idade = document.querySelector("#f_idade")

    //passamos os parâmetros com o value para eles serem criados "limpos" nas constantes anteriores
    const p = new Pessoa(nome.value, idade.value)

    //adicionando o objeto "p" no array "pessoas"
    pessoas.push(p)

    //limpando os nomes depois que o user apertar o botão
    nome.value = ""
    idade.value = ""

    //redireciona a barra de digitação para o campo "nome"
    nome.focus()

    //chamando o método que imprime no campo de texto abaixo
    addPessoa()
})
