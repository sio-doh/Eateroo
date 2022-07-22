const { expressjwt: jwt }  = require("express-jwt"); 

// instantiate the JWT token validation middleware 
const isAuthenticated = jwt({
    secret: process.env.TOKEN_SECRET, 
    algorithms: ["HS256"], 
    requestProperty: "payload", 
    getToken: getTokenFromHeaders
}); 

// function used to extracts JWT token from request's "Authorization" Headers 
function getTokenFromHeaders (req) {
    // check if token is available on request Headers 
    if (req.headers.authorization && req.headers.authorization.split(" ")[0] === "Bearer") {
        // get encoded token string and return it 
        const token = req.headers.authorization.split(" ")[1]; 
        return token;
    }

    return null; 
} 

// export middleware in order to use it to create protected routes 
module.exports = {
    isAuthenticated
}