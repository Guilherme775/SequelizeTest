const User = require('../models/User');
const Addres = require('../models/Addres');

module.exports = {
    async index(req, res) {
        const { user_id } = req.params;

        const user = await User.findByPk(user_id, {
            include: { association: 'addres' }
        });

        return res.json(user);
    },

    async create(req, res) {
        const { user_id } = req.params;
        const { zipcode, street, number } = req.body;

        const user = await User.findByPk(user_id);

        if(!user){
            return res.status(400).json({ error: 'User not found' });
        }

        const addres = await Addres.create({
            zipcode,
            street,
            number,
            user_id,
        });

        return res.json(addres);
    }
};