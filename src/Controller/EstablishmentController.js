const { sequelize, Establishment, Owner } = require('../database/Model')

class EstablishmentController {
    
    async create(req, res){
        try {
            //const transaction = await sequelize.transaction();

            const newEstab = {
                nome: 'Padaria Trigou Dourado',
                dataAbertura: '2017-11-17',
                idOwner: 1,
                status: 1,
            }

            await Establishment.create(newEstab);

            res.status(201).send();
            
        } catch(err) {
            res.status(500).send(err);
        }
    }

    async getAll(req, res){
        try {
            const establishments = await Establishment.findAll({include: { model: Owner }});

            res.status(200).send(establishments);
        } catch(err) {
            res.status(501).send(err)
        }
    }

    async getByOwnerId(req, res){

        const {id} = req.params;

        try {
            const establishments = await Establishment.findAll({where: {id_owner: id}});

            res.status(200).send(establishments);

        } catch (err) {
            res.status(500).send(err);
        }
    }


}

module.exports = new EstablishmentController();