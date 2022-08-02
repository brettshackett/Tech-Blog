const Sequelize = require('sequelize');
require('dotenv').config();
let sequelize = new Sequelize('tech_blog', 'root', '$hackettBrett2', {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });
module.exports = sequelize;