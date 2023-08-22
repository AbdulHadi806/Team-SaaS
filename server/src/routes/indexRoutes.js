const express = require("express");
const adminRoutes = require("./adminRoutes");
const userRoutes = require("./userRoutes");
const { checkAdminAuth } = require("../utils/middleware/adminAuth");
const { checkUserAuth } = require("../utils/middleware/userAuth");
const adminProfileRoutes = require("./profileRoutes");
const taskRoutes = require("./taskRoutes");
const userLoginRoutes = require("./userloginRoutes");
const Routes = express.Router();

Routes.use('/registration', adminRoutes)
Routes.use('/users', checkAdminAuth, userRoutes)
Routes.use('/profile', checkAdminAuth, adminProfileRoutes)
Routes.use('/tasks', checkAdminAuth, taskRoutes)
Routes.use('/users', userLoginRoutes)

module.exports = Routes;