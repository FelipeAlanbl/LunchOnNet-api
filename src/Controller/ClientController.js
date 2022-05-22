const { sequelize, User, Address, Client } = require('../database/Model');

class ClientController {

    async create (req, res){
        
        try {
        
        const transaction = await sequelize.transaction();

            const newUser = {
                name: 'Samara',
                email: 'samarasimoes@email.com',
                password: '123456',
                active: 1,
                type: 'client'
            }

        const user = await User.create(newUser, { transaction });

        await Client.create({id_user: user.id}, { transaction });

        //const address = await Address.create({...newUser.address, id_client: client.id}, {transaction});

        await transaction.commit()

        res.status(201).send()


        } catch(err) {

            await transaction.rollback();
            
            res.status(500).send(err)
        }
    }
}

module.exports = new ClientController();