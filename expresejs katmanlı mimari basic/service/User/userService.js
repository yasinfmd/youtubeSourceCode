const User = require('../../models/User/User')
const utils = require('../../utils/utils')
const userDal = require('../../dal/User/userDal')
const dtos = require('../../dto/dtos')
const { validationResult } = require("express-validator")

const userService = {

    async signIn(request) {
        const { email, password } = request.body

        const user = await userDal.findByQuery({ email, password: utils.helper.hashString(password) }, "email full_name")
        if (user) {
            dtos.baseResponse.data = {
                user,
                token: utils.helper.createToken(user)
            }
            dtos.baseResponse.success = true
            dtos.baseResponse.statusCode = 556565
        } else {
            utils.logger.error(`${email} ${password} ${utils.helper.hashString(password)}  kişi bulunamadı`)
            dtos.baseResponse.data = ""
            dtos.baseResponse.success = false
            dtos.baseResponse.statusCode = 556565
        }

        return dtos.baseResponse

    },

    async getBlogsById(request) {
        const { userId } = request.params
        // KONTROLLER !

        dtos.baseResponse.data = await userDal.getBlogsById(userId)
        dtos.baseResponse.message = "User  Blogları Geldi"
        dtos.baseResponse.statusCode = 787878
        return dtos.baseResponse
    },
    async getBlogsByName(request) {
        const { userId } = request.params

        const { blogName } = request.query
        //KONTROLLER !
        dtos.baseResponse.data = await userDal.getBlogByName(blogName, userId)
        dtos.baseResponse.message = "User  Belirbi Bir Blog Geldi"
        dtos.baseResponse.statusCode = 787878
        return dtos.baseResponse

    },
    async updatePhoto(request) {
        const file = request.file
        const { userId } = request.query
        const findedUser = await userDal.isExistUser(userId)
        const ip = await utils.helper.getHost()
        if (findedUser) {
            const file_name = findedUser.profile_picture.split("/uploads/images/")
            const fileResult = utils.helper.deleteFileFromDisk(file_name[1])
            if (fileResult) {
                findedUser.profile_picture = `${ip}${process.env.FILE_PATH}/${file.filename}`
                dtos.baseResponse.data = await userDal.updateById(userId, { ...findedUser })
                dtos.baseResponse.message = "User  Başarıyla Güncellendi"
                dtos.baseResponse.statusCode = 10003
            } else {
                utils.logger.error(`${userId} numaralı kullanıcının eski resim dosyası silinemedi`)
                dtos.baseResponse.data = ""
                dtos.baseResponse.success = false
                dtos.baseResponse.statusCode = 556565
            }
        } else {
            utils.logger.error(`${userId} numaralı kullanıcı bulunamadı`)
            dtos.baseResponse.data = ""
            dtos.baseResponse.statusCode = 87878
            dtos.baseResponse.success = false
        }
        return dtos.baseResponse
    },

    async findByName(request) {
        const { name } = request.query

        const result = await userDal.findByName(name)

        if (result) { dtos.baseResponse.data = result }
        else {
            utils.logger.error(`${name} isimli kullanıcı bulunamadı`)
            dtos.baseResponse.data = ""
            dtos.baseResponse.success = false
        }
        dtos.baseResponse.message = result ? "User Detayı İsme Göre Başarıyla Geldi" : "Böyle  İsimde Bir Kişi Yok"
        dtos.baseResponse.statusCode = 10001
        return dtos.baseResponse
    },


    async findByEmail(request) {
        const { email } = request.body
        const result = await userDal.findByEmail(email)
        if (result) { dtos.baseResponse.data = result }
        else {
            utils.logger.error(`${email} email değerine sahip kullanıcı bulunamadı`)
            dtos.baseResponse.data = ""
            dtos.baseResponse.success = false
        }
        dtos.baseResponse.message = result ? "User Emaila Göre Başarıyla Geldi" : "Email Mevcut Değil Kullanılabilir"
        dtos.baseResponse.statusCode = 10001
        return dtos.baseResponse
    },

    async updateUserById(request) {
        const { userId } = request.params
        const { name, surname, age, gender, activity_areas } = request.body
        const errors = validationResult(request)
        if (!errors.isEmpty()) {
            dtos.baseResponse.message = "User Verileri Geçersiz "
            dtos.baseResponse.statusCode = 566654
            dtos.baseResponse.success = false
            dtos.baseResponse.errors = errors.array({ onlyFirstError: true })
            dtos.baseResponse.data = null
        } else {
            const result = await userDal.isExistUser(userId)
            if (result) {
                dtos.baseResponse.data = await userDal.updateById(userId, { name, surname, age, gender, activity_areas, full_name: `${name} ${surname}` })
                dtos.baseResponse.message = "User  Başarıyla Güncellendi"
                dtos.baseResponse.statusCode = 10003
            } else {
                dtos.baseResponse.success = false
                dtos.baseResponse.message = "User  Bulunamadığı için Güncellenmedi"
                dtos.baseResponse.statusCode = 10003
            }

        }
        return dtos.baseResponse
    },
    async getAll() {
        dtos.baseResponse.data = await userDal.getAll()
        dtos.baseResponse.message = "User Listesi Başarıyla Geldi"
        dtos.baseResponse.statusCode = 10003
        return dtos.baseResponse
    },
    async getById(request) {
        const { userId } = request.params
        const result = await userDal.findById(userId)
        if (result) {
            dtos.baseResponse.data = result
        } else {
            dtos.baseResponse.data = "Kayıt Yok"
            dtos.baseResponse.success = false
            utils.logger.error(`${userId} kayıt bulunamadı`)
        }
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

        // Mail at !
        //rabitmq bağlan
        //consumer olustur vs vs !
        dtos.baseResponse.data = await userDal.create(user)
        dtos.baseResponse.message = "User Başarıyla Oluşturuldu"
        dtos.baseResponse.statusCode = 10002
        return dtos.baseResponse
    }

}


module.exports = userService