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