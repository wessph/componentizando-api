module.exports = app => {
    let login = async (req, res) => {
        console.log('LOGIN DADOS', req.body)
        
        let user = await app
        .db("users")
        .where({ email: req.body.email })
        .first()

        if (user) {
            const payload = {
                id: user.id,
                name: user.name,
                email: user.email
            }

            if (req.body.password != user.password) {
                res.status(400).send('Senha inválida!')
            }
            return res.status(200).json()
        }
    }
    return {
        login
    }
}