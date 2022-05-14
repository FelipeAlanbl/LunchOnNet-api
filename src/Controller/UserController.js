const { User } = require('../database/Model');

class UserController {

    async create(req, res){
        const newUser = {
            name: 'Felipe',
            email: 'felipealanbl@gmail.com',
            password: '123456',
            active: 1
        }

        const user = await User.create(newUser);
        res.send(user)
    }

    async getAll(req, res){
        const users = await User.findAll();

        res.send(users)
    }

    async getById(req, res){
        const { id } = req.params;

        const user = await User.findByPk(id)

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