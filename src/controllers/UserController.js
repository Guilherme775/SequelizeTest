const User = require('../models/User');

module.exports = {
    async index(req, res) {
        const users = await User.findAll();

        res.json(users);
    },
    async create(req, res) {
        const { name, email } = req.body;

        const user = await User.create({ name, email });

        return res.json(user);
    }
};