function filme(nome,estilo,url){
    this.nome = nome;
    this.estilo = estilo;
    this.url = url;
    }

var filmes = [{
    'nome': null,
    'estilo': null,
    'url': null,
    }   
]

let cont = 0
const botao  = document.querySelector('button')
botao.addEventListener('click', cadastrar)

function cadastrar(){
    let name = document.querySelector('#name')
    let gen = document.querySelector('#gen')
    let img = document.querySelector('#img')

    filmes.push(new filme(name.value, gen.value, img.value))
    cont++
    mostrar(cont)
}

function mostrar(cont){
    cont -= 1 
     for(let i = 1; i<=cont; i++){
        console.log(filmes[i])
    }
}
