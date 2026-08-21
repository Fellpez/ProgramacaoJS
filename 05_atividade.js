/*# Atividade – Sistema de Precificação do Conradito Doguezito

A lanchonete **Conradito Doguezito** deseja criar um programa para calcular o **preço de custo** e o **preço de venda** de seus produtos.

O programa deverá solicitar ao usuário, por meio de entradas (`input`), os valores dos ingredientes utilizados nos cachorros-quentes. Dessa forma, os preços não devem ser definidos diretamente no código.

## Ingredientes

O programa deverá solicitar o preço de:

- Pão
- Salsicha
- Purê de batata
- Queijo
- Bacon

Depois de informar os preços dos ingredientes, o usuário deverá informar também uma **porcentagem de lucro** que deseja obter sobre os produtos.

Por exemplo, caso o usuário informe **30% de lucro**, o programa deverá acrescentar 30% ao preço de custo de cada produto para determinar seu preço de venda.

## Produtos

A lanchonete possui três opções de cachorros-quentes:

### 1. Cachorro-quente com purê

- Pão
- 1 purê de batata
- 1 bacon
- 1 salsicha

### 2. Cachorro-quente cremoso

- Pão
- 2 salsichas
- 1 queijo

### 3. Cachorro-quente especial

- Pão
- 1 salsicha
- 1 purê de batata
- 1 queijo
- 1 bacon

Além dos cachorros-quentes, existe um **Combo**, formado por:

- 1 Cachorro-quente com purê
- 1 Cachorro-quente cremoso
- 1 Cachorro-quente especial

## O programa deverá:

- Solicitar ao usuário o valor de cada ingrediente.
- Solicitar a porcentagem de lucro desejada.
- Calcular o preço de custo de cada cachorro-quente.
- Calcular o preço de venda de cada cachorro-quente considerando a porcentagem de lucro informada.
- Calcular o preço de custo e o preço de venda do Combo.
- Exibir um cardápio organizado contendo:
  - Nome do produto;
  - Ingredientes;
  - Preço de custo;
  - Preço de venda.
- Informar ao final qual porcentagem de lucro foi utilizada.*/




let prompt = require("prompt-sync")()

// CADASTRO DE INGREDIENTES

console.log("========================================")
console.log("CADASTRO DE PREÇOS - CONRADITO DOGUEZITO")
console.log("========================================")
console.log("\n")


// INGREDIENTES

let ingrediente1 = parseFloat (prompt ("Digite o preço do pão: "))
let ingrediente2 = parseFloat (prompt ("Digite o preço do salsicha: "))
let ingrediente3 = parseFloat (prompt ("Digite o preço do pure de batata: "))
let ingrediente4 = parseFloat (prompt ("Digite o preço do queijo: " ))
let ingrediente5 = parseFloat (prompt ("Digite o preço do bacon: " ))
let porcentagem_lucro = parseFloat(prompt ("Digite a porcentagem de lucro que deseja: "))

// OPERAÇÕES MATEMÁTICAS

let cachorro_pure = ingrediente1 + ingrediente2 + ingrediente3 + ingrediente5
let cachorro_cremoso = ingrediente1 + ingrediente2 *2 + ingrediente4
let cachorro_especial = ingrediente1 + ingrediente2 + ingrediente3 + ingrediente4 + ingrediente5
let dog_combo = cachorro_pure + cachorro_cremoso + cachorro_especial

// -----------------------------------------------------

let lucro1 = cachorro_pure * porcentagem_lucro
let lucro2 = cachorro_cremoso * porcentagem_lucro
let lucro3 = cachorro_especial * porcentagem_lucro
let lucro4 = dog_combo * porcentagem_lucro

// CACHORROS QUENTE DISPONIVEIS

let dog1 = "CACHORRO-QUENTE COM PURÊ"
let dog2 = "CACHORRO-QUENTE CREMOSO"
let dog3 = "CACHORRO-QUENTE ESPECIAL"
let combo = "COMBO"

// ------------------------------------------------------

// COMEÇO DO SITE

console.log("\n")

console.log("==========================================")
console.log("CARDAPIO - CONRADITO DOGUEZITO")
console.log("==========================================")


console.log("Lucro aplicado: " + porcentagem_lucro + "%")
porcentagem_lucro = porcentagem_lucro / 100

// ---------------------------------------
console.log("\n")
// ---------------------------------------

console.log(dog1)
console.log("Ingredientes: Pão, salsicha, pure de batata e bacon") 
console.log("Preço de custo: " + cachorro_pure)
console.log("Lucro sobre venda: " + porcentagem_lucro * cachorro_pure)

console.log("\n")
console.log(dog2)
console.log("Ingredientes: Pão, 2 salsichas e queijo") 
console.log("Preço de custo: " + cachorro_cremoso)
console.log("Lucro sobre venda: " + porcentagem_lucro * cachorro_cremoso)

// ---------------------------------------
console.log("\n")
// ---------------------------------------

console.log(dog3)
console.log("Ingredientes: Pão, salsicha, pure de batata e queijo") 
console.log("Preço de custo: " + cachorro_especial)
console.log("Lucro sobre venda: " + porcentagem_lucro * cachorro_especial)

// ---------------------------------------
console.log("\n")
// ---------------------------------------

console.log(combo)
console.log("Itens inclusos: " + dog1 +", "+ dog2 +", "+ dog3) 
console.log("Preço de custo: " + dog_combo)
console.log("Lucro sobre venda: " + porcentagem_lucro * dog_combo)