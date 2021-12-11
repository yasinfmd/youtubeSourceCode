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
exports.getAll = async (req, res, next) => {
    try {
        const result = await userService.getAll()
        res.json(result).status(StatusCodes.OK)
    } catch (error) {
        utils.logger.error(error.message)
        res.json({ error: error.message, code: "XYZ_101", timestamp: Date.now() }).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
}

exports.create = async (req, res, next) => {
    try {
        const result = await userService.create(req)
        res.json(result).status(StatusCodes.OK)
    } catch (error) {
        utils.logger.error(error.message)
        res.json({ error: error.message, code: "XYZ_101", timestamp: Date.now() }).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }

}

exports.getById = async (req, res, next) => {
    try {
        const result = await userService.getById(req)
        if (result) {
            res.json(result).status(StatusCodes.OK)
        } else {
            utils.logger.error(`${req.params.userId} kayıt bulunamadı`)
            res.json({ userId: req.params.userId, message: "Kayıt Yok" }).status(StatusCodes.OK)
        }
    } catch (error) {
        utils.logger.error(error.message)
        res.json({ error: error.message, code: "XYZ_101", timestamp: Date.now() }).status(StatusCodes.INTERNAL_SERVER_ERROR)
    }
}