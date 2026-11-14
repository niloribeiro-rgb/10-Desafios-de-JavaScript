//import {dados} from 'dados.js'

const dados = [
    {
        titulo: "Questão 1 — Calculadora de Média Escolar", html: `<input type="text" id="nomeAluno" placeholder=" nome do aluno"><input type='number' id='nota1' placeholder='Nota 1'>
    <input type='number' id='nota2' placeholder='Nota 2'>
    <input type='number' id='nota3' placeholder='Nota 3'>
    <button onclick='q1()'>Calcular</button>`},
    {
        titulo: "Questão 2 — Gerador de Tabuada Interativa", html: `<input type="number" id="numTabuada" placeholder="Num para Tabuada">
        <button onclick="q2()">Tabuada</button>`}
    ,
    {
        titulo: "Questão 3 — Simulador de Compras com Desconto", html: `<input type="text" id="nomeProduto" placeholder=" nome do produto">
    <input type="number" id="valor" placeholder="valor unitário">
    <input type="number" id="quantidade" placeholder="quantidade">
    <input type="number" id="desconto" placeholder="percentual de desconto(%)">
    <button onclick="q3()">Calcular</button>`}
]

const questoes = document.querySelector(`#questoes`)
const jsContainer = document.querySelector(`#jsContainer`)
const titulo = document.querySelector(`.titulo`)

// evento change no addEventlistener para select
questoes.addEventListener('change', () => { inserirQuestoes(questoes.value) })

inserirQuestoes(1)
function inserirQuestoes(questao) {
    let posicao = Number(questao) - 1
    let html = dados[posicao].html
    jsContainer.innerHTML = html
    titulo.innerHTML = `
        <h1>${dados[posicao].titulo}</h1>`
}

//q1
function q1() {
   
    let nome = document.querySelector(`#nomeAluno`)
    let inputNota1 = document.querySelector(`#nota1`)
    let inputNota2 = document.querySelector(`#nota2`)
    let inputNota3 = document.querySelector(`#nota3`)

    if(nome.value == ""){
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


//q2
function q2() {
    let inputNumTabuada = document.querySelector(`#numTabuada`)

    let numTabuada = inputNumTabuada.value
    if (numTabuada < 1 || numTabuada > 20) {
        alert(`numero deve ser entre 1 e 20. digitou: ${numTabuada}`)
        return
    }

    let texto = ""
    for (let i = 0; i < 10; i++) {
        tabuada = numTabuada * (i + 1)
        texto += `${numTabuada} X ${i + 1} = ${tabuada} \n`
    }
    alert(texto)
}

//q3
function q3() {
    let inputNomeProduto = document.querySelector(`#nomeProduto`)
    let inputValor = document.querySelector(`#valor`)
    let inputQuantidade = document.querySelector(`#quantidade`)
    let inputDesconto = document.querySelector(`#desconto`)

    let nomeProduto = inputNomeProduto.value
    let valor = inputValor.value
    let quantidade = inputQuantidade.value
    let desconto = inputDesconto.value

    let valorTotal = valor * quantidade
    let valorDesconto = valorTotal * (desconto / 100)
    let totalComDesconto = valorTotal - valorDesconto

    alert(`valor economizado: R$${valorDesconto} e o total a pagar: R$${totalComDesconto}`)
}

//q4
function q4() {
    let inputNome = document.querySelector(`#q4nome`)
    let inputIdade = document.querySelector(`#idade`)
    let inputCurso = document.querySelector(`#curso`)
    let inputMatricula = document.querySelector(`#matricula`)

    let nome = inputNome.value
    let idade = inputIdade.value
    let curso = inputCurso.value
    let matricula = inputMatricula.value

    let alunos = [
        { nome: "joao", idade: 16, curso: "TI", matricula: "0000100267" }
    ]



}
