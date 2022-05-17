const { User, Admin, Client, Owner, Establishment } = require('../database/Model')

class AuthController {
    
    async login(req, res){
        
        const { email, password } = req.body

        const user = await User.findOne({ include:[ Admin, Client, {model: Owner, include: {Establishment}}], where: { email }});

        if(!user) res.send('User not found');

        if(!(await user.comparePassword(password))) res.send('Invalid password')

        user.password = undefined;
        
        res.json({
            user,
            token: user.generateToken()
        });
    }

    register(req, res){
        res.send('Register Route')
    }

    
}


module.exports = new AuthController();