function q1() {
    let nome = ""
    while (nome == "") {
        nome = prompt("nome do aluno?")
    }

    let inputNota1 = document.querySelector(`#nota1`)
    let inputNota2 = document.querySelector(`#nota2`)
    let inputNota3 = document.querySelector(`#nota3`)

    let notas = [inputNota1.value, inputNota3.value, inputNota3.value]
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
    alert(`nome: ${nome} \n media= ${media.toFixed(2)} \n status: ${status}`)
}

function q2() {
    let inputNumTabuada = document.querySelector(`#numTabuada`)
    
    let numTabuada = inputNumTabuada.value
    if(numTabuada < 1 || numTabuada >20) {
        alert(`numero deve ser entre 1 e 20. digitou: ${numTabuada}`)
        return
    }

    let texto = ""
    for(let i=0; i<10; i++){
        tabuada = numTabuada * (i+1)
        texto += `${numTabuada} X ${i+1} = ${tabuada} \n`
    }
    alert(texto)
}

function q3(){
    let inputNomeProduto = document.querySelector(`#nomeProduto`)
    let inputValor = document.querySelector(`#valor`)
    let inputQuantidade = document.querySelector(`#quantidade`)
    let inputDesconto = document.querySelector(`#desconto`)

    let nomeProduto = inputNomeProduto.value
    let valor = inputValor.value
    let quantidade = inputQuantidade.value
    let desconto = inputDesconto.value

    let valorTotal = valor * quantidade
    let valorDesconto = valorTotal * (desconto/100)
    let totalComDesconto = valorTotal - valorDesconto

    alert(`valor economizado: R$${valorDesconto} e o total a pagar: R$${totalComDesconto}`)
}

function q4(){
    let inputNome = document.querySelector(`#q4nome`)
    let inputIdade = document.querySelector(`#idade`)
    let inputCurso = document.querySelector(`#curso`)
    let inputMatricula = document.querySelector(`#matricula`)

    let nome = inputNome.value
    let idade = inputIdade.value
    let curso = inputCurso.value
    let matricula = inputMatricula.value

    let alunos = [
        {nome:"joao", idade:16, curso:"TI", matricula:"0000100267"}
    ]

    

}
