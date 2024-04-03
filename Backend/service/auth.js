const jwt = require('jsonwebtoken');


function setUser(user){
   return jwt.sign({
    _id: user._id,
    email: user.email
   }, 'yashshubhbhaibhai')
}

function getUser(token){
    if(token === undefined) return null;
    try{
        return jwt.verify(token, 'yashshubhbhaibhai');
    }
    catch(err){
        return null;
    }
}

module.exports = {  
    setUser,
    getUser
}