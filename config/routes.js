module.exports = app => {
    // Registro e login
    app.route("/register").post(app.components.users.register.register);
    app.route("/login").post(app.components.users.login.login)
}