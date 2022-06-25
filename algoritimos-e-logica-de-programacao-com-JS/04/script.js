/*
  Solicitar o nome do aluno e as 3 notas
  do bimestre calcular a média daquele aluno.

  A média positiva deverá ser maior que 6

  Se o aluno passou no bimestre, dar os 
  parabéns.

  Se o aluno não passou no bimestre, 
  motivar o aluno a dar seu melhor na prova
  de recuperação.

  Em ambos os casos, mostre uma mensagem com o nome do aluno e a nota
*/

let studentName = prompt("Qual nome do Aluno?");

let n1 = prompt("Qual foi sua primeira nota?");
let n2 = prompt("Qual foi sua segunda nota?");
let n3 = prompt("Qual foi sua terceira nota?");

let media = (Number(n1) + Number(n2) + Number(n3)) / 3;

let resultado = media >= 6;

media = media.toFixed(2);

if (resultado) {
  alert(`Parabéns ${studentName} sua media foi de ${media}, você passou no Bimestre`)
} else {
  alert(`${studentName} sua media foi de ${media}, você ficou de recuperção, estude mais para a prova`)
};


