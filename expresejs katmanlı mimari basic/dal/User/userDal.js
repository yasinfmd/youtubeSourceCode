const User = require('../../models/User/User')

const userDataAccess = {
    async create(userModel) {
        return await userModel.save()
    },
    async findById(userId) {
        return await User.findById(userId)
    },
    async findByEmail(email) {
        return await User.findOne({ email })
    },
    async findByName(name) {
        return await User.findOne({ name })
    },
    async getAll() {
        return await User.find()
    },
    async updateById(userId, userModel) {
        return await User.findByIdAndUpdate(userId, userModel, { new: true })
    },
    async isExistUser(userId) {
        return await User.exists({ _id: userId })
    },
    async findByQuery(where, fields) {
        return await User.findOne(where).select(fields)
    },
    async getBlogsById(userId) {
        return await User.findOne({ _id: userId }).populate({
            path: "blogs",
            select: "text date"
        })
    },
    async getBlogByName(text, userId) {
        return await User.findOne({ _id: userId }).populate({
            path: "blogs",
            select: "text date",
            match: { text: text }
        })
    },

}

module.exports = userDataAccess