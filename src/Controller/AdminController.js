const { Admin, User, sequelize } = require('../database/Model');

class AdminController {
    
    async create(req, res) {
        
        try {
            const transaction = await sequelize.transaction();

            const newUser = {
                name: 'Felipe',
                email: 'felipeh_alan@hotmail.com',
                password: '123456',
                active: 1,
                type: 'admin'
            }
    
            const user = await User.create(newUser, { transaction });

            const newAdmin = {
                id_user: user.id
            }

            const admin = await Admin.create(newAdmin, { transaction })

            await transaction.commit();

            res.status(201).send();

        } catch (err) {
            await transaction.rollback();

            res.status(500).send(err);
        }
    }
}

module.exports = new AdminController();