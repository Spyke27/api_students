const express = require('express')
const { getAlunos, getAluno, postAluno } = require('../controllers/alunos')
const checkPassword = require('../middleware/check')

const routes = express()

//routes.use(checkPassword);
routes.get('/alunos', getAlunos)
routes.get('/alunos/:id', getAluno)
routes.post('/alunos/cadastrar', postAluno)

module.exports = routes

