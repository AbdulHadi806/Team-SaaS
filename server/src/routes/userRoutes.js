const express = require("express");
const { createUser, loginUser, deleteUser, updateUserInfo } = require("../controllers/user-controller");
const userRoutes = express.Router();

userRoutes.post('/createUser', createUser)
userRoutes.post('/loginUser', loginUser)
userRoutes.delete('/', deleteUser)
userRoutes.patch('/', updateUserInfo)
module.exports = userRoutes;