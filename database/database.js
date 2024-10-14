const Sequelize = require("sequelize");

const connection = new Sequelize('projectquestions','root','1234567',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;