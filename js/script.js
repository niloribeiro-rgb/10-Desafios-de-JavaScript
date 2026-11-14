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
    ,
    {
        titulo: "Questão 4 — Cadastro e Listagem de Alunos", html: ` <input type="text" id="q4nome" placeholder="nome">
    <input type="number" id="idade" placeholder="idade">
    <input type="text" id="curso" placeholder="curso">
    <input type="number" id="matricula" placeholder="matrícula">
    <button onclick="q4('salvar')">salvar</button>
    <button onclick="q4('mostrar')">mostrar</button>
`}
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