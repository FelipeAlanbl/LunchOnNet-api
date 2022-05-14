const jwt = require('jsonwebtoken');

async function AuthMidleware(req, res, next){

    try {
        if(!req.headers.authorization) {
            return res.status(500).json({message: 'Access unauthorized'});
        }
    
        const [bearer, token] = req.headers.authorization.split(' ');
    
        if(bearer !== 'Bearer') {
            return res.status(500).json({message: 'Token malformatted'});
        }
        
        if(!token) {
            return res.status(500).json({message: 'Token invalid'});
        }
    
        const tokenIsValid = await jwt.verify(token, process.env.APP_SECRET);

        next();

    } catch (err) {
        res.status(500).json({message: err.message})
    }



}

module.exports = AuthMidleware;