const express = require("express");
const adminRoutes = require("./adminRoutes");
const userRoutes = require("./userRoutes");
const { checkAdminAuth } = require("../utils/middleware/adminAuth");
const adminProfileRoutes = require("./profileRoutes");
const Routes = express.Router();

Routes.use('/registration', adminRoutes)
Routes.use('/users', checkAdminAuth, userRoutes)
Routes.use('/profile', checkAdminAuth, adminProfileRoutes)

module.exports = Routes;