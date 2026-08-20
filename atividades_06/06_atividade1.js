let prompt = require("prompt-sync")()

let numero = prompt ("Digite um número: ")

if (numero <= 0) {
    console.log("Seu número é negativo.")

} else {
    console.log("Seu número é positivo.")
}