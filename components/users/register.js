module.exports = app => {
  const register = async (req, res, next) => {
    console.log(req.body)

    await app
    .db("users")
    .insert([{email: req.body.email, 
      password: req.body.password, 
      name: req.body.name}])

    return res.status(200).send("Usuário cadastrado")
  }
  return{
    register
  }
}