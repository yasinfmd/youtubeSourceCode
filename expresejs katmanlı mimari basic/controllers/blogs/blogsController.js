const blogService = require('../../service/Blog/blogService')
const { StatusCodes } = require('http-status-codes')
const utils = require('../../utils/utils')
exports.getAll = (req, res, next) => {
    res.send("Blogs")
}

exports.getById = (req, res, next) => {
    res.send("Blogs With Id")
}


exports.create = async (req, res, next) => {
    try {
        const result = await blogService.create(req)
        res.json(result).status(StatusCodes.OK)
    } catch (error) {
        utils.logger.error(error.message)
        res.json({ error: error.message, code: "XYZ_101", timestamp: Date.now() }).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
}