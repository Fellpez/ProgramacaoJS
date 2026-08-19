let prompt = require("prompt-sync")()

let usuario = prompt ("Digite o seu usuário: ")

if (usuario == "Fellipe") {
    console.log("Seja Bem vindo ser absoluto das galáxias.")    
} else{
    console.log("ACESSO NEGADO")
}


let idade = parseInt (prompt("Digite sua idade: "))

if (idade > 99) {
    console.log("idade inálida! tente novamente")
}
if (idade <= 0) {
     console.log("idade inálida! tente novamente")
}

console.log("A idade digitada foi: " + idade)    
