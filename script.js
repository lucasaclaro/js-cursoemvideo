function funcaoLength() {
    var nome = document.getElementById("length").value
    var contador = nome.length
    var resultado = document.getElementById("resultado-length")
    resultado.innerHTML = `A string "${nome}" possui ${contador} caracteres.`
}

function funcaoToUpperCase() {
    var nome = document.getElementById("toUpperCase").value
    var contador = nome.toUpperCase()
    var resultado = document.getElementById("resultado-toUpperCase")
    resultado.innerHTML = `A string "${nome}" em letras maiúsculas é "${contador}".`
}

function funcaoToLowerCase() {
    var nome = document.getElementById("toLowerCase").value
    var contador = nome.toLowerCase()
    var resultado = document.getElementById("resultado-toLowerCase")
    resultado.innerHTML = `A string "${nome}" em letras minúsculas é "${contador}".`
}

function funcaoToFixed() {
    var numero = Number(document.getElementById("toFixed").value)
    var resultado = document.getElementById("resultado-toFixed")
    resultado.innerHTML = numero.toFixed(2)
}

function funcaoReplace() {
    var numero = Number(document.getElementById("replace").value)
    var resultado = document.getElementById("resultado-replace")
    resultado.innerHTML = numero.toFixed(2).replace('.', ',')
}

function funcaoCalcular() {
    var valorUm = Number(document.getElementById("valorUm").value)
    var valorDois = Number(document.getElementById("valorDois").value)
    var resultado = document.getElementById("resultado-operadores")
    resultado.innerHTML = `${valorUm} + ${valorDois} = ${valorUm + valorDois}<br>
    ${valorUm} - ${valorDois} = ${valorUm - valorDois}<br>
    ${valorUm} * ${valorDois} = ${valorUm * valorDois}<br>
    ${valorUm} / ${valorDois} = ${valorUm / valorDois}<br>
    ${valorUm} % ${valorDois} = ${valorUm % valorDois}<br>
    ${valorUm} ** ${valorDois} = ${valorUm ** valorDois}<br> `
}