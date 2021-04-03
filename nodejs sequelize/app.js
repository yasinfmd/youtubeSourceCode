const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('nodejs', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})
const User = require('./models/user')

//Bağlantı Fonksiyonu
const onConnect = async () => {
    try {
        await sequelize.authenticate();
        console.log('bağlandı')
        User.sync({ force: false })
    } catch (error) {
        console.log('hata', error)
    }
}

//Bağlantı 
//onConnect();

//Model Select All

const getUsers = async () => {
    const result = await User.findAll();
    //console.log('result', result.length)
    result.forEach((item) => {
        //console.log('item', item.dataValues)
    })
}

const findOneUser = async () => {
    const result = await User.findByPk(2);
    const whereResult = await User.findOne({
        where: {
            id: 1
        }
    })
    // console.log('result', result.dataValues)
    // console.log('whereResult', whereResult.dataValues)
}

const onCreateUser = async () => {
    const result = await User.create({ firstName: 'Günseli', surName: 'Dalkılıç', age: 10 });
    // console.log('result', result.dataValues)
}

const onMultipleCreate = async () => {
    const multipleResult = await User.bulkCreate([{ firstName: 'Günseli111', surName: 'Dalkılıç', age: 10 }, { firstName: 'Günseli2222', surName: 'Dalkılıç', age: 10 }])

    console.log('multipleResult', multipleResult)

}

const onDeleteUser = async () => {
    const result = await User.destroy({
        where: {
            id: 8
        }
    })
    console.log('result', result)
}

const onUpdateUser = async () => {
    const result = await User.update({ age: 50 }, {
        where: {
            id: 20
        }
    })
    console.log('result', result)
}

//update user
onUpdateUser();
//delete user
onDeleteUser();

//create multiple users
//onMultipleCreate();


//create new user
//onCreateUser();

//find one user
findOneUser();
// all users
getUsers();