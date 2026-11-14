//q1
function q1() {

    let nome = document.querySelector(`#nomeAluno`)
    let inputNota1 = document.querySelector(`#nota1`)
    let inputNota2 = document.querySelector(`#nota2`)
    let inputNota3 = document.querySelector(`#nota3`)

    if (nome.value == "") {
        alert("digite o nome")
        return
    }
    let notas = [inputNota1.value, inputNota2.value, inputNota3.value]
    for (let i = 0; i < 3; i++) {
        // notas[i] = prompt(`qual a ${i + 1}° nota`)
        if (Number(notas[i]) < 0 || Number(notas[i]) > 10) {
            alert("nota deve ser de 1 a 10")
            return
        }
    }
    let notaTotal = 0

    for (let i = 0; i < 3; i++) {
        notaTotal += Number(notas[i])
    }
    let media = notaTotal / notas.length

    let status = ""
    if (media >= 7) {
        status = "aprovado"
    }
    else if (media < 7 && media >= 5) {
        status = "recuperacao"
    }
    else if (media < 5) {
        status = "reprovado"
    }
    alert(`nome: ${nome.value} \n media= ${media.toFixed(2)} \n status: ${status}`)
}