const password = "cubos123";
const cursos = require('./cursos')

let alunos = [
  {
    id: 1,
    nome: "Rodrigo",
    sobrenome: "Daniel",
    idade: 22,
    curso: cursos.cursos[0]
  },
  {
    id: 2,
    nome: "Marcos",
    sobrenome: "Silveira",
    idade: 36,
    curso: cursos.cursos[1]
}
];

module.exports = {
  password,
  alunos,
};
