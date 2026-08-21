let prompt = require("prompt-sync")()

let peixes = parseFloat(prompt ("Digite a quantidade de KG de peixes: "))
let excesso = parseFloat (peixes - 50)
let preco_multa = 4.25


if (peixes > 50) {
    excesso = peixes - 50
    let multa = excesso * preco_multa
    console.log("A quantidade de peixes foi excedida.")
    console.log("O valor da multa é: " + multa)
    }
    
    else{
        peixes = peixes - excesso
        console.log("A quantidade de peixes está dentro dos limites.")
    }


