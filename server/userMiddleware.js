const jwt = require('jsonwebtoken');
const {JWTSecret} = require('./config');

function userMiddleware(req,res,next) {
    try{
        const token = req?.headers?.authorization;
        if(!token){
            return res.json({msg:"Unauthorized"});
        }
        const decoded = jwt.verify(JSON.parse(token), JWTSecret);
        req.email = decoded.email;
        next();
    }catch(e){
        console.log("userMiddleware error: " + e);
    }
    

}
module.exports = userMiddleware;
