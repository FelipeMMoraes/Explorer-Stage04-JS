// // Bora praticar e rever tudo o que foi ensinado na aula? **💜**
// Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

// - [ ]  A soma dos dois números;
// - [ ]  A subtração dos dois números;
// - [ ]  A multiplicação dos dois números;
// - [ ]  A divisão dos dois números;
// - [ ]  O resto da divisão dos dois números;

alert(`Vamos calcular 2 numeros`)

let numberOne = prompt("Digite o primeiro numero: ")
let numberTwo = prompt("Digite o segundo numero: ")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const multi = numberOne * numberTwo
let div = numberOne / numberTwo
let restDiv = numberOne % numberTwo

div = div.toFixed(2)
restDiv = restDiv.toFixed(2)



alert(`O resultado da soma é ${sum}`)
alert(`O resultado da subtração é ${sub}`)
alert(`O resultado da multiplicação é ${multi}`)
alert(`O resultado da divisao é ${div}`)
alert(`O resto da divisão é ${restDiv}`)

if (sum % 2 == 0) {
  alert(`A soma dos dois números é par`)
} else {
  alert(`A soma dos dois números é Impar`)
}

if (numberOne == numberTwo) {
  alert(`Os números escolhidos são iguais`)
} else {
  alert(`Os números escolhidos são diferentes`)
}

