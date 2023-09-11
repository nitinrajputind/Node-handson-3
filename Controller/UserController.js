//login
const login = (req, res) => {
  res.send("Welcome to the The Login Page");
};

//signup
const Signup = (req, res) => {
  res.send("You are SucessFully registered");
};

//logout
const logout = (req, res) => {
  res.send("Thankyou for visiting on Website");
};

module.exports = { login, logout, Signup };
