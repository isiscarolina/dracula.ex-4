

function Pessoa(nome, idade) {
    this.nome = nome
    this.idade = idade
    
    
}

function verificaMaisVelho(pessoas) {
    let maiorIdade;  // undefined
    let pessoaMaisVelha;

    for (let pessoa of pessoas) {
        if (typeof maiorIdade == 'undefined') {
            maiorIdade = pessoa.idade
            pessoaMaisVelha = pessoa
        } else {
            if (pessoa.idade > maiorIdade) {
                maiorIdade = pessoa.idade
                pessoaMaisVelha = pessoa
            }
        }
    }

    return pessoaMaisVelha
}


function listaRegistros(registros) {
    // for (let registro of registros) {

    // }
    let intro = document.createElement('div');
    intro.innerHTML += '<p>Os inmortais:</p>'
    let lista = document.createElement('ul')

    registros.forEach( registro => {
        let item = document.createElement('li')
        item.textContent = `${registro.nome} possui ${registro.idade} anos`
        lista.appendChild(item)
    } )

    intro.appendChild(lista)

    adicionaResultado(intro)
}


document.querySelector('form').addEventListener('submit', (e) => {
   
    registraPessoa(e)
    limpaResultados()
    listaRegistros(registros)
    
    let maisVelho = verificaMaisVelho(registros)
    let resIdade = document.createElement('p')
    resIdade.textContent = `A/O ${maisVelho.nome} é Drácula com ${maisVelho.idade} anos`
    adicionaResultado(resIdade)

})

let registros = []

function registraPessoa(event) {
    event.preventDefault()

    let form = event.target
    let dados = new FormData(form)

    let nome = dados.get('nome')
    let idade = Number(dados.get('idade'))
   

    form.querySelectorAll('input[type=text]').forEach( campo => campo.value = '')

    let registro = new Pessoa(nome, idade)

    registros.push(registro)

}

function limpaResultados() {
    document.querySelector("#lista-resultados").innerHTML = ''
}

function adicionaResultado(elemento) {
    document.querySelector("#lista-resultados").appendChild(elemento)
}
