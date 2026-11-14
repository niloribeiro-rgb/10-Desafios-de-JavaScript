//q4
let alunos = [
    { nome: "joao", idade: 16, curso: "TI", matricula: "0000100267" }
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

        if(nome == ""){
            alert("digite nome")
            return
        }
        if(idade == ""){
            alert("digite idade")
            return
        }
          if(curso == ""){
            alert("digite curso")
            return
        }
          if(matricula == ""){
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
