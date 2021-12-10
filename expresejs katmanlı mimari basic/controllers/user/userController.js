const userService = require('../../service/User/userService')
const { StatusCodes } = require('http-status-codes')
const utils = require('../../utils/utils')
/**
 * @swagger
 *
 * /api/v1/user/getAll:
 *   get:
 *     summary: Tüm Kullanıcıları Getirir
 *     tags:
 *       - User   
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *          description: Tüm List   
 *          content:
 *            application/json:
 *              schema:
 *                type: array  
 */
exports.getAll = (req, res, next) => {
    res.json([{ ad: "Yasin" }, { ad: "Ali" }]).status(200)
}

exports.create = async (req, res, next) => {
    try {
        const result = await userService.create(req)
        console.log("r", result)
        res.json(result).status(StatusCodes.OK)
    } catch (error) {
        utils.logger.error(error.message)
        res.json({ error: error.message, code: "XYZ_101", timestamp: Date.now() }).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }

}

exports.getById = (req, res, next) => {
    res.send("Users With Id")
}