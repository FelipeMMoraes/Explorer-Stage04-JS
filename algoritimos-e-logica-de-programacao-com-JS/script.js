// Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

// - nome;
// - nota da primeira prova;
// - nota da segunda prova.

// Depois de criada a lista:

// - [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
// - [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.

const students = [
  {
    name: "João",
    n1: 8,
    n2: 6,
  },
  {
    name: "Letícia",
    n1: 7,
    n2: 4,
  },
  {
    name: "Diego",
    n1: 8,
    n2: 2,
  },
  {
    name: "Júlia",
    n1: 7,
    n2: 5,
  },  
]

function media (n1, n2) {
  return (n1 + n2) / 2
}

function mediaAluno(students) {
  const resultMedia = media(students.n1, students.n2)
  if (resultMedia >= 7) {
    alert(`
    A média do(a) aluno(a) ${students.name} é ${resultMedia}
    Parabens, ${students.name}! Você foi aprovado no concurso
    `)
  } else {
    alert(`
    A média do(a) aluno(a) ${students.name} é ${resultMedia}
    Nao foi dessa vez, ${students.name}, tente na proxima.
    `)
  }    
}

function setStudents() {
  for (let student of students) {
    mediaAluno(student)
}
}

setStudents()
