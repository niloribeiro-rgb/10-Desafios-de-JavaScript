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