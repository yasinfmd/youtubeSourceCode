const { Sequelize, Op } = require('sequelize')
const sequelize = new Sequelize('nodejs', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})
const User = require('./models/user')
const Phones = require('./models/phones')

User.hasMany(Phones)
Phones.belongsTo(User)
//Bağlantı Fonksiyonu
const onConnect = async () => {
    try {
        await sequelize.authenticate();
        console.log('bağlandı')
        User.sync({ force: false })
        Phones.sync({ force: false })
    } catch (error) {
        console.log('hata', error)
    }
}


const phoneGetUser = async () => {
    const result = await Phones.findAll({
        include: {
            model: User,
            // where: {
            //     phoneNumberType: {
            //         [Op.eq]: 'ev'
            //     }
            // }
        }
    })
    console.log('result', result[0].dataValues.User.dataValues)
}

const userGetPhoneRelations = async () => {
    const result = await User.findAll({
        include: {
            model: Phones,
            where: {
                phoneNumberType: {
                    [Op.eq]: 'ev'
                }
            }
        }
    })
    // console.log('result', result[0].dataValues.Phones)
    //const getPhonesCount = await result[0].countPhones();
    //const getPhones = await result[0].getPhones();
    //const createNewPhone = await result[0].createPhone({ phoneNumber: '213213', phoneNumberType: 'iş' })
    //console.log('createNewPhone', createNewPhone)
    // console.log('getPhonesCount', getPhonesCount)
    //console.log('getPhones', getPhones)
    //console.log('result', result[0].dataValues.Phones)
}
userGetPhoneRelations();
phoneGetUser();

//Bağlantı 
//onConnect();

