/*
Capturar 2 números
e fazer as operações matemáticas
de soma, subtração, multiplicação,
divisão e resto da divisão.

E para cada operação, mostrar um alerta
com o resultado.
*/

alert("Vamos fazer operções matematicas com os numeros escolhidos");

let firstNumber = prompt("Escolha o primeiro numero");
let secondNumber = prompt("Escolha o segundo numero");

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

const sum = firstNumber + secondNumber;
const sub = firstNumber - secondNumber;
const multi = firstNumber * secondNumber;
const div = firstNumber / secondNumber;
const restDiv = firstNumber % secondNumber;

alert("O resultado da soma é " + sum);
alert("O resultado da subtração é " + sub);
alert("O resultado da multiplicação é " + multi);
alert("O resultado da divisão é " + div);
alert("O resto da divisão é " + restDiv);
