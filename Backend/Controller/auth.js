
const bcrypt = require("bcrypt");
const { User, validateUser } = require("./../Model/users");

const _ = require("lodash");
const jwt = require("jsonwebtoken");
const { AUTH_TOKEN, ADMIN } = require("../constants");

function signUp(req, res) {
    let data = req.body;
    console.log(data);
    res.send(data)
    
}
function signIn() {
    
}
module.exports = { signUp,signIn };