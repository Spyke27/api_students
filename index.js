const express = require('express')
const app = express()
const routes = require('./routes/alunos')

app.use(express.json())
app.use(routes)

app.listen(3000)