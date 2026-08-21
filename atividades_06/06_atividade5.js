let prompt = require("prompt-sync")()

let time1 = parseInt (prompt("Digite a quantidade de gols marcados pelo time 1: "))
let time2 = parseInt (prompt("Digite a quantidade de gols marcados pelo time 2: "))

if (time1 > time2) {
    console.log("O time 1 venceu a partida.")
}


else {
    console.log("O time 2 venceu a partida.")
}


// ??