const app = require("express")();
const db = require ("./config/db");
const consign = require("consign");
const cors = require("cors");

app.db = db
app.use(cors())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Headers", 'Origin, Content-Type');
  next();
})

consign()
  .then("./config/middlewares.js")
  .then("./components/users/register.js")
  .then("./components/users/login.js")
  .then("./config/routes.js")
  .into(app)

app.listen(4000, () => {
    console.log('Backend iniciado com sucesso!')
})