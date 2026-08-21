let prompt = require("prompt-sync")()


let altura = parseFloat(prompt ("Digite sua altura: "))
let peso = parseFloat(prompt ("Digite seu peso: "))

let imc = peso / (altura * altura)

console.log("Seu IMC é de: " + imc)

if (imc <= 18.5) {
    console.log("Voce está abaixo do peso adequado.")
}

if (imc >= 18.5) {
    console.log("Voce está no seu peso adequado.")
}

// if (imc >= 18.5) {
//     console.log("Voce está no seu peso adequado.")
// }

// if (imc >= 25) {
//     console.log("Voce está acima do peso adequado.")
// }

// if (imc >= 30) {
//     console.log("Voce está extremamente acima do seu peso adequado")

// }
