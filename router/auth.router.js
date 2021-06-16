const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require("../db/connection");
const User = require("../model/user");
const authenticate = require("../middleware/authenticate")
const authcontroller = require("../controller/auth.controller")

router.post("/user/signup", authcontroller.signup)

router.post("/user/login", authcontroller.login);

router.post("/admin/loginadmin", authcontroller.adminlogin)


// authenticate.Authenticate
router.get("/about",authcontroller.about);

module.exports = router;
  