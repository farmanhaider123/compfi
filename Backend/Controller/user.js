const { User ,validateUser} = require("./../Model/users");


async function GetUserByid(req, res) {
    let uid = req.params.id
    let Isexist = await User.findOne({ _id: uid })
        if (Isexist) {
            res.send(Isexist)
        }
        if (!Isexist) {
            res.send({ "err": 1, "msg": "user is not exist" })
        }
    
    
}
module.exports={GetUserByid}