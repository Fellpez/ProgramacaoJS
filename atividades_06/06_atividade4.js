let prompt = require("prompt-sync")()

let peixes = parseFloat(prompt ("Digite a quantidade de KG de peixes: "))
let excesso = parseFloat (peixes - 50)
let preco_multa = 4.25


if (peixes <= 50) {
    peixes = peixes - excesso
    console.log("A quantidade de peixes está dentro dos limites.")
}

else{
    console.log("A quantidade de peixes foi excedida.")
    console.log(total)
}


