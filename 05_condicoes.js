// AULA 05 CONDICOES

let prompt = require("prompt-sync")()

console.log ("Bem-Vino ao site do DETRAN")
let idade = prompt("Digite sua idade: ")

// COMPARADORES
// > MAIOR
// < MENOR
// == IGUAL
// >= MAIOR OU IGUAL
// <= MENOR OU IGUAL
// != DIFERENTE

if (idade >= 18) {
    console.log("Você ja tem idade para tirar a CNH.")
} else {
    console.log("Você não tem idade para tirar a CNH")
} 

    
