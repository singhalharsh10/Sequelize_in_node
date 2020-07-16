const Sequelize = require('sequelize')
const DataTypes = Sequelize.DataTypes


const db = new Sequelize('sampledb1', 'sampleuser1', 'samplepass1', {
    host: 'localhost',
    dialect: 'mysql'
})

const Student = db.define('student', {
    name: {
        type: DataTypes.STRING(40),
        allowNull: false
    },

    age: {
        type: DataTypes.INTEGER(2),
        allowNull: false,
        default: -1
    },
})

module.exports = {
    db,
    Student
}


// db.sync({ alter: true }) //alter is used so that if any changes are made to table it will reflect in schema
//     .then(() => console.log('Database Synchronised'))
//     .catch((err) => console.log(err))