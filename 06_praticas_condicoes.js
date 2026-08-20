let prompt = require("prompt-sync")()

let preco_sao_paulo = 100.00
let preco_araraquara = 100.00
let preco_Seguro = 100.00


let total = 0
 
console.log("Escolha seu destino: ")
console.log("1 - São Paulo por R$ " + preco_sao_paulo)
console.log("2 - Araraquara por R$ " + preco_araraquara)

let escolha = prompt ("Digite uma opção: ")

if (escolha == "1") {
    total = preco_sao_paulo
} else {
    total = preco_araraquara
}

let seguro = prompt ("Deseja adicionar seguro por mais R$ " + preco_Seguro + "?: ")
if (seguro == "sim") {
    total = total + preco_Seguro
}

let cupom = prompt("Digite seu cupom: ")
if(cupom == "fellipe10") {
    console.log ("Cupom de 10% aplicado")
    let desconto = total * 0.10
    total = total - desconto

} else {
    console.log("Esse cupom nao esxiste.")


}
let email = prompt ("Quer receber emails promocionais?: ")

if (email == "sim") {
    console.log("Obrigdo por se cadastrar!")
} else {
    console.log("Ok, voce nao recebera emails")
}

console.log ("O total da viagem será de R$ " + total)


console.log("Escolha seu pagamento: ")
console.log("1 - Cartão de Crédito (Acréscimo de 5%)")
console.log("2 - PIX (Desconto de 5%)")
resposta = prompt("Esolha uma opção: ")

if(resposta == "1"){
    total = total * 1.05

    // let desconto2 = total * 0.05
    // total = total + desconto2
}
else{
    total = total * 0.95

    // let desconto3 = total * 0.05
    // total = total - desconto3
}

console.log("O total da viagem escolhida será de: " + total)

console.log("Obrigado, boa viagem e volte sempre.")