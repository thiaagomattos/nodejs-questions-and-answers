const Sequelize = require("sequelize");

const connection = new Sequelize('projectquestions','root','123456',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;