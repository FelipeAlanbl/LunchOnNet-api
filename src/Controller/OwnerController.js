const { sequelize, User, Owner } = require('../database/Model')

class OwnerController {
    async create(req, res){
        try {
            const transaction = await sequelize.transaction();

            const newUser = {
                name: 'Marina',
                email: 'Marinasimoes@hotmail.com',
                password: '123456',
                active: 1,
                type: 'owner'
            }

            const user = await User.create(newUser, { transaction });

            const owner = await Owner.create({id_user: user.id}, { transaction })

            transaction.commit();

            res.status(201).send();
            
        } catch (err) {
            transaction.rollback();

            res.status(500).send()
        }
    }
}

module.exports = new OwnerController();