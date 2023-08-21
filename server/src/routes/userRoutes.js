const express = require("express");
const { createUser, loginUser, deleteUser, updateUserInfo } = require("../controllers/user-controller");
const userRoutes = express.Router();

userRoutes.post('/createUser', createUser)
userRoutes.post('/loginUser', loginUser)
userRoutes.delete('/:id', deleteUser)
userRoutes.patch('/:id', updateUserInfo)

module.exports = userRoutes;