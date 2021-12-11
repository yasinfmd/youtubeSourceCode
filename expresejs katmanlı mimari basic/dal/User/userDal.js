const User = require('../../models/User/User')

const userDataAccess = {
    async create(userModel) {
        return await userModel.save()
    },
    async findById(userId) {
        return await User.findById(userId)
    },
    async getAll() {
        return await User.find()
    }
}

module.exports = userDataAccess