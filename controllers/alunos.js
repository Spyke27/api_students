const {alunos} = require('../database/alunos')
const {cursos} = require('../database/cursos')

//GET ALL STUDENTS
const getAlunos = (req, res) => {
    res.status(200).send(alunos)
}
//GET STUDENT BY ID
const getAluno = (req, res) => {
    const { id } = req.params;

    if(!Number(id)){
        return res.status(400).json({message: "Invalid id"})
    }

    const aluno = alunos.find((aluno) => {
        return aluno.id === Number(id);
    })

    if(!aluno){
        return res.status(404).json({message: "Student not found!"})
    }

    res.status(200).send(aluno);
}
//CREATE NEW STUDENT
const postAluno = (req, res) => {
    const lastId = alunos.length + 1
    const { nome, sobrenome, idade, curso } = req.body;

    const novoNome = nome ? nome : {message: "Required name"}
    const novoSobrenome = sobrenome ? sobrenome : {message: "Required last name"}
    const novaIdade = Number(idade) && idade > 17 ? Number(idade) : {message: "Required age"}
    const novoCurso = cursos.indexOf(curso) != -1 ? curso : {message: "Course not found"}

    if(!nome || !sobrenome || !idade || !curso){
        return res.status(400).json({message: "Check the informations"}) 
    } 
    else if (novoCurso.message == "Course not found"){
        return res.status(404).json(novoCurso)
    } 
    else {
        let novoAluno = {
            id: lastId,
            nome: novoNome,
            sobrenome: novoSobrenome,
            idade: novaIdade,
            curso: novoCurso
        }
        alunos.push(novoAluno)
        res.status(201).send(novoCurso) 
    }

}

module.exports = {
    getAlunos,
    getAluno,
    postAluno
}