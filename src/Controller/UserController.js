const { User, Admin, Client, Owner } = require('../database/Model');

class UserController {


    async getAll(req, res){
        const users = await User.findAll({ include: [Admin, Client, Owner] });

        res.send(users)
    }

    async getById(req, res){
        const { id } = req.params;

        const user = await User.findOne({include: [Admin, Client, Owner], where: { id }})

        res.send(user)
    }

    update(req, res){
        const { id } = req.params;
        res.send('User update. Id:; ' + id)
    }

    delete(req, res){
        const { id } = req.params;
        res.send('User delete. Id: ' + id);
    }
}

module.exports = new UserController();;