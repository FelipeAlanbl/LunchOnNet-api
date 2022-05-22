const { User, Admin, Client, Owner } = require('../database/Model');
const { Op } = require('sequelize');

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

    async totalUsers(req, res){

        const count = await User.count({
            where: {
                type: {[Op.ne]: 'admin'}
            }
        });

        res.json(count);
    }
}

module.exports = new UserController();;