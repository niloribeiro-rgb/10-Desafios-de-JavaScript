//q4
let alunos = [
    { nome: "Joao", idade: 16, curso: "TI", matricula: "0000100267" }
]
function q4(opcaoBotao) {
    if (opcaoBotao == "salvar") {
        let inputNome = document.querySelector(`#q4nome`)
        let inputIdade = document.querySelector(`#idade`)
        let inputCurso = document.querySelector(`#curso`)
        let inputMatricula = document.querySelector(`#matricula`)

        let nome = inputNome.value
        let idade = inputIdade.value
        let curso = inputCurso.value
        let matricula = inputMatricula.value

        if (nome == "") {
            alert("digite nome")
            return
        }
        if (idade == "") {
            alert("digite idade")
            return
        }
        if (curso == "") {
            alert("digite curso")
            return
        }
        if (matricula == "") {
            alert("digite matricula")
            return
        }
        let stop = false
        alunos.forEach((aluno, index) => {
            if (aluno.matricula.includes(matricula) == true && matricula.length == aluno.matricula.length) {
                alert("matricula ja existe")
                stop = true
            }
        })
        if (stop == true) {
            return
        }


        alunos.push({ nome: nome, idade: idade, curso: curso, matricula: matricula })
    }
    let registros = ""

    alunos.forEach((aluno, index) => {
        registros += `${index + 1}. nome: ${aluno.nome}, idade: ${aluno.idade}, curso: ${aluno.curso}, matricula: ${aluno.matricula}\n`
    })
    alert(registros)
}

//q5

const inputPesquisa = document.querySelector(`#inputPesquisaAluno`)
const selectFiltrar = document.querySelector(`#inputFiltrarCurso`)
const container = document.querySelector(`#q5JsContainer`)

inputPesquisa.addEventListener('input', () => {
    pesquisa()
})

selectFiltrar.addEventListener('change', () => {
    pesquisa()
})

function pesquisa() {
    let pesquisa = inputPesquisa.value
    let cursoSelecionado = selectFiltrar.value
    let alunosNome = []
    if (cursoSelecionado == "todos") {
        alunosNome = alunos.map((aluno) => aluno.nome)
    }
    else {
        alunos.forEach((aluno) => {
            if (aluno.curso.toLowerCase() === cursoSelecionado) {
                alunosNome.push(aluno.nome)
            }
        })
    }


    let resultados = alunosNome.filter(aluno => aluno.toLowerCase().includes(pesquisa.toLowerCase()))

    let html = `${resultados.length} resultados <br> <br>`
    if (resultados.length == 0) {
        html += "Nenhum encontrado"
    }
    else {
        html += "<ol>"
        resultados.forEach((resultado) => { html += `<li>${resultado}</li>` })
        html += "</ol>"
    }
    container.innerHTML = html
}