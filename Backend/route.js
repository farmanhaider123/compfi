const express = require('express');
const router = express.Router();
const {signUp,signIn,postotp,resend}=require('./Controller/auth');
const { GetUserByid } = require('./Controller/user');
router.post("/signup", signUp);
router.post("/signin", signIn);
router.post("/otp", postotp); 
router.post("/resendotp",resend)
router.get("/getuserbyid/:id",GetUserByid)
module.exports = router;