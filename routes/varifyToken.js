const jwt = require('jsonwebtoken');

module.exports = (req,res,next)=>{
    const token = req.header('auth-token');
    if(!token) return res.status(401).send('Access Denied')

    try{
        const verification = jwt.verify(token,process.env.MY_TOKEN)
        next();
    }
    catch(err){
        res.status(400).send('Invalid Token');
    }
}