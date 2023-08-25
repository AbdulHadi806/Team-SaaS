const express = require("express");
const { createUser, deleteUser, updateUserInfo, getAllUsers } = require("../controllers/user-controller");
const userRoutes = express.Router();

userRoutes.post('/createUser', createUser)
userRoutes.delete('/', deleteUser)
userRoutes.patch('/', updateUserInfo)
userRoutes.get('/users', getAllUsers)
module.exports = userRoutes;