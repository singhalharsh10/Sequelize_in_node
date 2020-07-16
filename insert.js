const { db, Student } = require('./models')

const task = async() => {
    try {
        await db.sync({ alter: true })
            // Insert a student

        await Student.create({
            name: 'Some Persons',
            age: 20
        })



    } catch (e) {
        console.log(e)
    }
}

task();