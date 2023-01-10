const mongoose = require('mongoose');

const UserOTP = mongoose.model(
    "userOtp",
    new mongoose.Schema({
        user_id: {
            type: String,
            required:true
        }
        ,
        otp: {
            type: Number,
            maxlength: 6,
            
        },

        otpCreatedAt: {
            type:Date
        }
        ,
        expiresAT: {
          type:Date  
        }
    }))

    module.exports={UserOTP}