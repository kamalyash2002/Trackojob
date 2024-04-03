const { getUser } = require("../service/auth");

async function checkForAuthentication(req, res, next) {
    // checking if the authorization header is present in the request
    const authorizationHeaderValue = req.headers?.['authorization'].split('Bearer ')[1];
    req.user = null;
    // if the authorization header is not present, then return unauthorized
    if(!authorizationHeaderValue){
        return res.status(401).json({message: "Unauthorized"});
    }
    const user = getUser(authorizationHeaderValue);
    // apending the user object to the request object
    req.user = user;
    return next();
}

// for the Authorization of the particular role
function restrictTo(roles=[]){
    return (req, res, next) => {
        if(!roles.includes(req.user.role)){
            return res.status(403).json({message: "Forbidden"});
        }
        return next();
    }
}

module.exports = {
    checkForAuthentication,
    restrictTo
}