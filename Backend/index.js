const express = require('express');
const router = express.Router();
const {signUp,signIn}=require('./Controller/auth')
router.post("/api/v1/auth/signup", signUp);
router.post("/api/v1/auth/signin", signIn);
 
module.exports = router;