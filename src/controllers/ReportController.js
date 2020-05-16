const { Op } = require('sequelize');
const User = require('../models/User');

module.exports = {
    async show(req, res) {
        const users = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {
                    [Op.iLike]: '%@email.com'
                }
            },
            include: [
                { association: 'addres', where: { street: 'Rua Teste' }},
                { association: 'techs', 
                required: false,
                where: {
                    name: {
                        [Op.iLike]: 'React.js'
                    }
                }}
            ]
        });

        return res.json(users);
    }
};