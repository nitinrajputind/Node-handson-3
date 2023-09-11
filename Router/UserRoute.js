const { login, Signup, logout } = require("../Controller/UserController");
const { validate } = require("../Middleware/UserMiddleware");

const UserRoute = require("express").Router();
// Login Route 
UserRoute.get("/login/:age", validate, login)

// SignUp 
UserRoute.get("/Signup", Signup)

//logout 
UserRoute.get("/logout", logout)

module.exports = UserRoute;