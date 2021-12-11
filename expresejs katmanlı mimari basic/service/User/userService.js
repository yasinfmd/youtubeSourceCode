const User = require('../../models/User/User')
const utils = require('../../utils/utils')
const userDal = require('../../dal/User/userDal')
const dtos = require('../../dto/dtos')
const userService = {
    // TODO UPDATE USER , UPDATE PHOTO , FINDBYEMAIL , FINDBYNAME, BLOG!, VALIDATIONS

    async getAll() {
        dtos.baseResponse.data = await userDal.getAll()
        dtos.baseResponse.message = "User Listesi Başarıyla Geldi"
        dtos.baseResponse.statusCode = 10003
        return dtos.baseResponse
    },

    async getById(request) {
        const { userId } = request.params
        dtos.baseResponse.data = await userDal.findById(userId)
        dtos.baseResponse.message = "User Detayı Başarıyla Geldi"
        dtos.baseResponse.statusCode = 10001
        return dtos.baseResponse
    },
    async create(request) {
        const file = request.file
        const { name, surname, age, email, gender, password, activity_areas } = request.body
        const ip = await utils.helper.getHost()
        const user = new User({
            name,
            surname,
            full_name: `${name} ${surname}`,
            age,
            email,
            password: utils.helper.hashString(password),
            gender,
            profile_picture: `${ip}${process.env.FILE_PATH}/${file.filename}`,
            activity_areas,
            blogs: []

        })

        dtos.baseResponse.data = await userDal.create(user)
        dtos.baseResponse.message = "User Başarıyla Oluşturuldu"
        dtos.baseResponse.statusCode = 10002
        return dtos.baseResponse
    }

}


module.exports = userService