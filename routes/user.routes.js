const express = require("express");
const { getAllUser, signup, login } = require("../controllers/user.controller");
const router = express.Router();

//Get all Users
router.get("/", getAllUser);

//Sign up function
router.get("/signup",signup);

//Login function
router.get("/login", login);

module.exports = router;