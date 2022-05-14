function AuthMidleware(req, res, next){

    console.log('Authorization', req.headers.authorization);

    next();
}

module.exports = AuthMidleware;