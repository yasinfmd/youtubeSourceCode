const Blog = require('../../models/Blog/Blog')

const blogDataAccess = {
    async create(blogModel) {
        return await blogModel.save()
    },
    async findById(userId) {
        return await Blog.findById(userId)
    },
    async findByEmail(email) {
        return await Blog.findOne({ email })
    },
    async findByName(name) {
        return await Blog.findOne({ name })
    },
    async getAll() {
        return await User.find()
    },
    async updateById(userId, userModel) {
        return await Blog.findByIdAndUpdate(userId, userModel, { new: true })
    },
    async isExistUser(userId) {
        return await Blog.exists({ _id: userId })
    },
    async findByQuery(where, fields) {
        return await Blog.findOne(where).select(fields)
    }
}

module.exports = blogDataAccess