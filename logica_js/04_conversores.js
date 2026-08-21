// aula 04 converter variaveis

let prompt = require ("prompt-sync")()



let numero1 = prompt ("Digite um número: ")

let numero2 = parseInt ( prompt ("Digite outro número: ") )

let soma = numero1 + numero2

console.log("A soma dos números é: " + soma)

// --------------------------------------------------------------------------------

let nascimento = parseInt ( prompt ("Digite sua data de nascimento: "))
let idade_atual = 2026 - nascimento
console.log ("A sua idade atual é: " + idade_atual)


let nota1 = prompt ("Digite a nota do aluno: ")
nota1 = parseInt(nota1)
let nota2 = prompt ("Digite a nota do aluno: ")
nota2 = parseInt(nota2)
let nota3 = prompt ("Digite a nota do aluno: ")
nota3 = parseInt(nota3)
let media = (nota1 + nota2 + nota3) / 3


console.log("A média do aluno é de: " + media) 

let produto = prompt ("Digite o nome do produto: ")
let preco = prompt ("Digite o preço do produto: ")
let quantidade = prompt ("Digite a quantidade em estoque: ")
let lucro = quantidade * preco

console.log("O lucro ao vender todos os "+ produto +" em estoque será de: " + lucro)
