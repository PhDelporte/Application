// Imports
var jwt = require('jsonwebtoken');

const JWT_SIGN_SECRET = ''

// Exported functions
module.exports = {
    generateTokenForuser: function(userData){
        return jwt.sign({
            userId: userData.id,
            isAdmin: userData.isAdmin
        })
    }
}