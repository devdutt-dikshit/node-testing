const router = require("express").Router();
const User = require('../model/User');
const bcrypt= require('bcryptjs')
const jwt = require('jsonwebtoken')

router.post('/register', async (req,res)=>{
   
    // hashing pw
    const salt= await bcrypt.genSalt(5)
    const pw = await bcrypt.hash(req.body.password,salt)
    
    //new user add
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: pw,
    });
    try{
        const saveUser=await user.save();
        const token = jwt.sign({_id:user.id}, process.env.MY_TOKEN);
        res.header("auth-token",token).send({token:token,'user-saved-data':saveUser})

    }
    catch(error){
        res.status(400).send(error)
    }
})


module.exports = router;