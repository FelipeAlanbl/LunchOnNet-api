const { User, Admin, Client, Owner, sequelize } = require("../database/Model");

class AuthController {
  async login(req, res) {
    try {
      console.log(req.body);
      const { email, password } = req.body;

      if (!email || !password)
        return res.status(500).json({ message: "Fields are required." });

      const user = await User.findOne({
        include: [Admin, Client, Owner],
        where: { email },
      });

      if (!user) return res.status(500).json({ message: "User not found." });

      if (!(await user.comparePassword(password)))
        return res.status(500).json({ message: "Invalid Password." });

      user.password = undefined;

      return res.status(200).json({
        user,
        token: user.generateToken(),
      });
    } catch (err) {
      return res.status(500).send(err);
    }
  }

  async register(req, res) {
    const { name, email, type, password } = req.body;

    if (!name || !email || !type) {
      res.status(500).json({ message: "Fields are required." });
    }

    const tempUser = {
      name,
      email,
      type,
      password,
      active: 1,
    };
    const transaction = await sequelize.transaction();

    try {
      const user = await User.create(tempUser, { transaction });

      if (type === "client") {
        await Client.create({ id_user: user.id }, { transaction });
      }

      if (type === "owner") {
        await Owner.create({ id_user: user.id }, { transaction });
      }

      await transaction.commit();

      res.status(201).send({
        user,
        token: user.generateToken(),
      });
    } catch (err) {
      await transaction.rollback();

      res.status(500).send(err);
    }
  }

  async forgotPassword(req, res){
    
  }
}

module.exports = new AuthController();
