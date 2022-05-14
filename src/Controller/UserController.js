class UserController {

    create(req, res){
        res.send('User Create')
    }

    getAll(req, res){
        res.send('User GetAll')
    }

    getById(req, res){
        const { id } = req.params;
        res.send('User getById. Id: ' + id)
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