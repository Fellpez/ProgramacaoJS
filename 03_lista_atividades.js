/*
### ----- Atividade 0:

Desenhe no terminal um retângulo usando apenas o comando do console.log
 _____
|     |
|     |
|     |
|_____|
*/
let retangulo1 = " _______"
let retangulo2 = "|       |"
let retangulo3 = "|       |"
let retangulo4 = "|       |"
let retangulo5 = "|       |"
let retangulo6 = "|_______|"

console.log (retangulo1)
console.log (retangulo2)
console.log (retangulo3)
console.log (retangulo4)
console.log (retangulo5)
console.log (retangulo6)

/*
### ----- Atividade 1:

Crie uma variável chamada `cidade` e outra chamada `estado`.
Mostre na tela a frase: "Eu moro em X - Y"

Substitua X pelo valor da variável `cidade` e Y pelo valor da variável `estado`.

*/

let cidade = "Sâo Carlos"
let estado = "Sâo Paulo"

console.log("Eu moro em " + cidade + " - " + estado)

/*
### ----- Atividade 2:

Crie duas variáveis chamadas `numero1` e `numero2`.
Atribua valores numéricos a elas.

Crie uma variável chamada `soma` para armazenar o resultado da soma dos dois números.

Mostre o resultado da soma na tela.

*/

let numero1 = 200
let numero2 = 150
let soma = numero1 + numero2

console.log ("A soma entre os números " + numero1 + " e " + numero2 + " é de " + soma)

/*
### ----- Atividade 3:

Crie uma variável chamada `idade`.
Mostre na tela a mensagem: "Olá, você tem X anos e daqui a 10 anos terá Y."

Substitua X pelo valor da idade atual e Y pela idade que a pessoa terá daqui a 10 anos.

*/

let idade = 23
let futuro = idade + 10

console.log ("Olá, você tem " + idade + " anos e daqui a 10 anos terá " + futuro)


/*
### ----- Atividade 4:

Crie uma variável chamada `numero`.

Calcule o dobro e o triplo desse número.
Armazene os resultados em duas novas variáveis.

Mostre na tela o número original, seu dobro e seu triplo.

*/

let numero_operacao = 23
let vezes2 = numero_operacao * 2
let vezes3 = numero_operacao * 3

console.log ("O número original é " + numero_operacao + " o dobro dele é " + vezes2 + " e o triplo é de " + vezes3)

/*
### ----- Atividade 5:

Crie variáveis para armazenar o nome e o preço de dois produtos diferentes.

Mostre na tela o nome e o preço de cada produto individualmente.
Em seguida, calcule e mostre o valor total dos dois produtos.

*/

let camisa1 = "Camisa Amarela"
let preco1 = 100
let camisa2 = "Camisa Vermelha"
let preco2 = 45
let preço_conjunto = preco1 + preco2

console.log ("O produto " + camisa1 + " custa R$ " + preco1)
console.log ("O Produto " + camisa2 + " custa R$ " + preco2)
console.log ("O valor total dos dois produtos é de R$ " + preço_conjunto)

/*
### ----- Atividade 6:

Crie uma variável chamada `salario`.

Considere que a pessoa receberá um aumento de R$ 500 e um desconto do INSS de R$ 250
Calcule o novo salário e armazene o resultado em uma nova variável.

Mostre na tela o salário atual e o novo salário.

*/

let salario = 2000
console.log ("Seu salário é de R$ " + salario)

let aumento = 500
salario = salario + aumento

console.log("Seu salário com aumento é de R$ " + salario)

let desconto_inss = 250
salario = salario - desconto_inss

console.log("Seu salário com desconto é de R$ " + salario)

/*
### ----- Atividade 7:

João recebe R$ 100 de mesada e gastou R$ 35.

Crie variáveis para representar o valor da mesada e o valor gasto.
Calcule quanto dinheiro sobrou e armazene o resultado em uma nova variável.

Mostre na tela o valor da mesada, o valor gasto e quanto dinheiro sobrou.

*/

let mesada = 100
let desconto = 35
let resto = mesada - desconto

console.log("O valor da mesada é de " + mesada)
console.log("O valor gasto da mesada é de " + desconto)
console.log("A quantidade de dinheiro que sobrou foi de " + resto)

/*
### ----- Atividade 8:

Crie duas variáveis chamadas `base` e `altura`.

Calcule a área de um retângulo utilizando esses dois valores.
Armazene o resultado em uma nova variável.

Mostre na tela o valor da base, da altura e da área calculada.

*/

let base = 10
let altura = 5
let area = base * altura

console.log("A área de um retangulo de " + base + " x " + altura + " é de " + area)

/*
### ----- Atividade 9:

Crie uma variável chamada `celsius` para armazenar uma temperatura em graus Celsius.
Converta essa temperatura para Fahrenheit e para Kelvin e mostre na tela os valores da conversão

*/

let celsius =  20
let farenheit = (celsius * 1.8 + 32)
let kelvin = (celsius + 273.15)

console.log("A temperatura de hoje é de " + celsius + " em Farenheit " + farenheit + " em Kelvin " + kelvin)

/*
### ----- Atividade 10:

Crie uma variável contendo uma quantidade de horas.

Calcule quantos minutos correspondem a essa quantidade de horas.
Calcule também quantos segundos correspondem a essa quantidade de horas.

Mostre na tela a quantidade de horas, de minutos e de segundos.

Exemplo:

3 horas correspondem a 180 minutos ou 10800 segundos.

*/

let horas = 5
let minutos = 60 * horas
let segundos = 3600 * horas

console.log("A hora de agora é " + horas + " em minutos " + minutos + " em segundos " + segundos)

/*
### ----- Atividade 11:

Crie duas variáveis de qualquer tipo.

Em seguida, faça com que o valor da primeira variável seja armazenado na segunda variável,
e que o valor original da segunda variável seja armazenado na primeira variável.

Ao final, mostre o valor das duas variáveis na tela.

*/

let aviao1 = 45
let aviao2 = 42

let aviao3 = aviao1

aviao1 = aviao2
aviao2 = aviao3

console.log("O aviao agora é " + aviao1 + " e o aviao2 agora é " + aviao2)

/*
### ----- Atividade 12:

Crie variáveis para armazenar a distância percorrida por um carro,
a quantidade de litros de combustível utilizada e o preço do litro do combustível.

Calcule quantos quilômetros o carro percorreu para cada litro de combustível.

Calcule também quanto foi gasto com combustível durante a viagem.

Mostre na tela a distância percorrida, a quantidade de litros utilizados,
o consumo do carro e o valor total gasto com combustível.

*/

let distancia = 100
let litros = 10
let preco_litro = 5
let consumo = distancia / litros
let gasto = litros * preco_litro

console.log("A distância percorrida foi de " + distancia + " km")
console.log ("A quantidade de litros utilizados foi de " + litros + " L")
console.log("O consumo do carro foi de " + (consumo) + " km/L")
console.log("O valor total gasto com combustível foi de " + (gasto) + " R$")