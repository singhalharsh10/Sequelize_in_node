const { db, Student } = require('./models')

const task = async() => {
    try {

        await db.sync()

        // Query using Sequelize

        const students = await Student.findAll({
            where: { age: { $lt: 10 } },
            order: [
                ['name', 'ASC']
            ]
        })


        students = await Student.findAll()
            // console.log(students)
        students.forEach(s => console.log(`age: ${s.dataValues.age} \t name: ${s.dataValues.name}`))

    } catch (e) {
        console.log(e)
    }
}

task();