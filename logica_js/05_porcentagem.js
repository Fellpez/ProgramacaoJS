// aULA 05 PORCENTAGEM

let prompt = require ("prompt-sync")()

let valor = parseFloat (prompt("Digite um valor: "))
let desconto = parseFloat (prompt("Escolha o desconto: "))
desconto = desconto / 100
let total = valor * desconto
let valor_final = valor - total
let acrescimo1 = valor * desconto 
let acrescimo2 = valor + acrescimo1

console.log ( total )
console.log ( valor_final )
console.log ( acrescimo2 )