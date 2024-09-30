const express = require("express");

const router = express.Router();


const userController = require("../Controller/user.controller")



router.post("/signup",userController.signup)

// http://localhost:3000/user/signup


router.post("/login",userController.login)

// http://localhost:3000/user/login
 



module.exports= router;