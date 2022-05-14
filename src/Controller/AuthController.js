class AuthController {
    
    login(req, res){
        res.send('Auth Login');
    }

    register(req, res){
        res.send('Register Route')
    }

    
}


module.exports = new AuthController();