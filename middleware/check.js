const { password } = require('../database/alunos')

const checkPassword = (req, res, next) => {
    const { passwordInput } = req.params

    if(passwordInput != password){
        return res.status(401).send({message: "Incorrect password!"})
    }

    next()
}

module.exports = checkPassword