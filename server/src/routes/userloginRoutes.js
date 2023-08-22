const express = require("express");
const { loginUser } = require("../controllers/user-controller");
const userLoginRoutes = express.Router();

userLoginRoutes.post('/loginUser', loginUser)

module.exports = userLoginRoutes;