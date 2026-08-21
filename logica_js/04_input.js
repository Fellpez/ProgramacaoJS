// aula 04 INPUT

let prompt = require("prompt-sync")()

/*let nome = prompt ("Olá. digite o seu nome: ")
let sobrenome = prompt ("Sobrenome: ")
let idade = prompt ("idade: ")
let nome_completo = nome +" "+ sobrenome


console.log("Seja bem vindo " + nome_completo + " voce tem " + idade + " anos XD") */


console.log ("\n\n")


let produto1 = prompt ("Digite o nome de um produto: ")
let preco1 = prompt ("Digite o preço de " + produto1 + " R$: ")
let produto2 = prompt ("Digite o nome de outro produto: ")
let preco2 = prompt ("Digite o preço de outro produto " + produto2 + " R$: ")

console.log ("\n-----------RELATÓRIO-----------")
console.log (produto1 +" - "+ "R$ "+ preco1)
console.log (produto2 +" - "+ "R$ "+ preco2)
