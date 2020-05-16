const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Addres = require('../models/Addres');
const Tech = require('../models/Tech');

const connection = new Sequelize(dbConfig);

User.init(connection);
Addres.init(connection);
Tech.init(connection);

Addres.associate(connection.models);
User.associate(connection.models);
Tech.associate(connection.models);

module.exports = connection;